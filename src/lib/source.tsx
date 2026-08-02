import { loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { defineDocs } from "fumadocs-mdx/macro";
import React from "react";
import { z } from "zod";

import { docsContentRoute, docsImageRoute, docsRoute } from "./shared";

const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema.extend({
      new: z.boolean().optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

type PageTreeNode = ReturnType<typeof source.getPageTree>["children"][number];

function transformNode(node: PageTreeNode): PageTreeNode {
  if (node.type === "page") {
    const page = source.getPages().find((p) => p.url === node.url);
    const isNew = page?.data && ("new" in page.data ? Boolean(page.data.new) : false);

    if (isNew) {
      return {
        ...node,
        name: (
          <span className="flex w-full items-center justify-between gap-2">
            <span>{typeof node.name === "string" ? node.name : (page?.data.title ?? node.name)}</span>
            <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-500/30 leading-none">
              New
            </span>
          </span>
        ),
      };
    }
  }

  if (node.type === "folder") {
    return {
      ...node,
      children: node.children.map(transformNode),
    };
  }

  return node;
}

export function getEnhancedPageTree() {
  const tree = source.getPageTree();
  return {
    ...tree,
    children: tree.children.map(transformNode),
  };
}

export function getPageImageUrl(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: "/" + [page.locale, ...docsImageRoute.split("/"), ...segments].filter(Boolean).join("/"),
  };
}

export function getPageMarkdownUrl(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "content.md"];

  return {
    segments,
    url: "/" + [page.locale, ...docsContentRoute.split("/"), ...segments].filter(Boolean).join("/"),
  };
}

export async function getLLMText(page: (typeof source)["$inferPage"]) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})

${processed}`;
}
