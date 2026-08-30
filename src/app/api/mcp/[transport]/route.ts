import fs from "node:fs/promises";
import path from "node:path";

import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

const getComponentsDir = () => path.join(process.cwd(), "src", "components", "ui");
const getDocsDir = () => path.join(process.cwd(), "content", "docs", "components");
const getRegistryDir = () => path.join(process.cwd(), "public", "r");

const handler = createMcpHandler(
  (server) => {
    // Tool 1: list_components
    server.registerTool(
      "list_components",
      {
        description:
          "List all UI components available in the adn-ui shadcn-compatible component registry along with their file structures.",
      },
      async () => {
        try {
          const componentsDir = getComponentsDir();
          const entries = await fs.readdir(componentsDir, { withFileTypes: true });
          const directories = entries.filter((e) => e.isDirectory()).map((e) => e.name);

          const components = await Promise.all(
            directories.map(async (name) => {
              const compDir = path.join(componentsDir, name);
              const files = await fs.readdir(compDir);
              return { name, files };
            }),
          );

          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({ count: components.length, components }, null, 2),
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error listing components: ${(error as Error).message}`,
              },
            ],
            isError: true,
          };
        }
      },
    );

    // Tool 2: get_component
    server.registerTool(
      "get_component",
      {
        description:
          "Get the complete source code, CSS styling, variants, and definitions for a specific adn-ui component.",
        inputSchema: z.object({
          name: z
            .string()
            .describe("The name of the component (e.g. 'button', 'switch', 'combobox', 'dialog')"),
        }),
      },
      async ({ name }) => {
        try {
          const compDir = path.join(getComponentsDir(), name);
          const files = await fs.readdir(compDir);

          const fileContents: Record<string, string> = {};
          for (const file of files) {
            const filePath = path.join(compDir, file);
            const content = await fs.readFile(filePath, "utf-8");
            fileContents[file] = content;
          }

          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  { component: name, filesCount: files.length, files: fileContents },
                  null,
                  2,
                ),
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error fetching component '${name}': ${(error as Error).message}`,
              },
            ],
            isError: true,
          };
        }
      },
    );

    // Tool 3: search_components
    server.registerTool(
      "search_components",
      {
        description: "Search for adn-ui components matching a query string.",
        inputSchema: z.object({
          query: z.string().describe("Keyword or component name to search for"),
        }),
      },
      async ({ query }) => {
        try {
          const componentsDir = getComponentsDir();
          const entries = await fs.readdir(componentsDir, { withFileTypes: true });
          const directories = entries.filter((e) => e.isDirectory()).map((e) => e.name);

          const q = query.toLowerCase();
          const matches = directories.filter((dir) => dir.toLowerCase().includes(q));

          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({ query, matchCount: matches.length, matches }, null, 2),
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error searching components: ${(error as Error).message}`,
              },
            ],
            isError: true,
          };
        }
      },
    );

    const resolveDocPath = (input: string) => {
      let cleaned = input.trim();
      if (cleaned.includes("/llms.mdx/docs/")) {
        cleaned = cleaned.split("/llms.mdx/docs/")[1];
      }
      cleaned = cleaned.replace(/\/content\.md$/, "").replace(/\.(mdx|md)$/, "");
      if (cleaned.startsWith("components/")) {
        cleaned = cleaned.replace(/^components\//, "");
      } else if (cleaned.startsWith("docs/components/")) {
        cleaned = cleaned.replace(/^docs\/components\//, "");
      }
      return cleaned;
    };

    // Tool 4: get_component_doc
    server.registerTool(
      "get_component_doc",
      {
        description: "Get MDX documentation and usage guidelines for a specific adn-ui component.",
        inputSchema: z.object({
          name: z
            .string()
            .describe(
              "The component name or doc URL (e.g. 'button', 'http://localhost:3000/llms.mdx/docs/components/button/content.md')",
            ),
        }),
      },
      async ({ name }) => {
        try {
          const compName = resolveDocPath(name);
          const docPath = path.join(getDocsDir(), `${compName}.mdx`);
          const content = await fs.readFile(docPath, "utf-8");

          return {
            content: [
              {
                type: "text",
                text: content,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error fetching documentation for '${name}': ${(error as Error).message}`,
              },
            ],
            isError: true,
          };
        }
      },
    );

    // Tool 5: get_registry_item
    server.registerTool(
      "get_registry_item",
      {
        description:
          "Get the shadcn-compatible JSON registry manifest for installing a component via shadcn CLI.",
        inputSchema: z.object({
          name: z.string().describe("The component name (e.g. 'button', 'switch')"),
        }),
      },
      async ({ name }) => {
        try {
          const regPath = path.join(getRegistryDir(), `${name}.json`);
          const content = await fs.readFile(regPath, "utf-8");

          return {
            content: [
              {
                type: "text",
                text: content,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error fetching registry manifest for '${name}': ${(error as Error).message}`,
              },
            ],
            isError: true,
          };
        }
      },
    );

    // Tool 6: init_adn_ui
    server.registerTool(
      "init_adn_ui",
      {
        description:
          "Get complete step-by-step instructions, components.json registry configuration, and Tailwind CSS v4 PostCSS/Vite setup code to integrate adn-ui into a project.",
        inputSchema: z.object({
          framework: z
            .enum(["nextjs", "vite", "all"])
            .optional()
            .default("all")
            .describe(
              "Target framework for project setup instructions ('nextjs', 'vite', or 'all')",
            ),
        }),
      },
      async ({ framework }) => {
        const nextJsSetup = `### Next.js PostCSS Configuration
Install: \`npm install -D postcss-tw-auto-reference\`

Configure \`postcss.config.mjs\`:
\`\`\`js
const config = {
  plugins: {
    "postcss-tw-auto-reference": {
      globalCssPath: "app/globals.css", // or "src/app/globals.css"
    },
    "@tailwindcss/postcss": {},
  },
};

export default config;
\`\`\``;

        const viteSetup = `### Vite Configuration
Install: \`npm install -D vite-plugin-tw-auto-reference\`

Configure \`vite.config.ts\`:
\`\`\`ts
import { defineConfig } from "vite";
import tailwindAutoReference from "vite-plugin-tw-auto-reference";

export default defineConfig({
  plugins: [
    tailwindAutoReference({
      globalCssPath: "src/index.css",
    }),
  ],
});
\`\`\``;

        let setupCode = "";
        if (framework === "nextjs") {
          setupCode = nextJsSetup;
        } else if (framework === "vite") {
          setupCode = viteSetup;
        } else {
          setupCode = `${nextJsSetup}\n\n${viteSetup}`;
        }

        const guide = `# adn-ui Project Integration Guide

## Step 1: Initialize shadcn CLI (if not already done)
\`\`\`bash
npx shadcn@latest init
\`\`\`

## Step 2: Add @adn-ui Namespace Registry
Add the registry mapping to your project's \`components.json\`:
\`\`\`json
{
  "registries": {
    "@adn-ui": "https://ui.awaiden.com/r/{name}.json"
  }
}
\`\`\`

## Step 3: Configure Tailwind CSS v4 Component CSS Setup
${setupCode}

## Step 4: Install adn-ui Components
Add components using the namespace:
\`\`\`bash
npx shadcn@latest add @adn-ui/button @adn-ui/card
\`\`\`
Or install directly via registry URL:
\`\`\`bash
npx shadcn@latest add https://ui.awaiden.com/r/button.json
\`\`\`

## Recommended AI Workflow
1. Call \`list_components\` to discover all available UI components.
2. Call \`get_component\` or \`get_registry_item\` to inspect source code or manifests.
3. Install components using \`npx shadcn@latest add @adn-ui/<component-name>\`.
`;

        return {
          content: [
            {
              type: "text",
              text: guide,
            },
          ],
        };
      },
    );

    // Tool 7: add_component
    server.registerTool(
      "add_component",
      {
        description:
          "Get complete installation command, registry manifest, and setup instructions to add an adn-ui component into a project.",
        inputSchema: z.object({
          name: z
            .string()
            .describe(
              "The name of the component to add (e.g. 'button', 'switch', 'combobox', 'dialog')",
            ),
        }),
      },
      async ({ name }) => {
        try {
          const compDir = path.join(getComponentsDir(), name);
          await fs.access(compDir);

          const regPath = path.join(getRegistryDir(), `${name}.json`);
          let registryManifest = null;
          try {
            const manifestContent = await fs.readFile(regPath, "utf-8");
            registryManifest = JSON.parse(manifestContent);
          } catch {
            // Manifest might not exist
          }

          const response = {
            component: name,
            cliCommand: `npx shadcn@latest add @adn-ui/${name}`,
            directUrlCommand: `npx shadcn@latest add https://ui.awaiden.com/r/${name}.json`,
            registryUrl: `https://ui.awaiden.com/r/${name}.json`,
            importPath: `@/components/ui/${name}`,
            manifest: registryManifest,
            instructions: [
              `Run \`npx shadcn@latest add @adn-ui/${name}\` to install the component files into your project.`,
              `Ensure your project has initialized shadcn CLI and added @adn-ui namespace in components.json.`,
              `Import components from '@/components/ui/${name}'.`,
            ],
          };

          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(response, null, 2),
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error adding component '${name}': Component '${name}' not found. ${(error as Error).message}`,
              },
            ],
            isError: true,
          };
        }
      },
    );

    // Tool 8: fetch_llm_doc
    server.registerTool(
      "fetch_llm_doc",
      {
        description:
          "Fetch raw MDX/markdown component documentation from full LLM doc URL or path (e.g. 'http://localhost:3000/llms.mdx/docs/components/button/content.md' or 'button').",
        inputSchema: z.object({
          urlOrPath: z
            .string()
            .describe(
              "Full LLM doc URL, path, or component name (e.g. 'http://localhost:3000/llms.mdx/docs/components/button/content.md', 'components/button/content.md', or 'button')",
            ),
        }),
      },
      async ({ urlOrPath }) => {
        try {
          const compName = resolveDocPath(urlOrPath);
          const docPath = path.join(getDocsDir(), `${compName}.mdx`);
          const content = await fs.readFile(docPath, "utf-8");

          return {
            content: [
              {
                type: "text",
                text: content,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error fetching documentation for '${urlOrPath}': ${(error as Error).message}`,
              },
            ],
            isError: true,
          };
        }
      },
    );
  },
  {
    serverInfo: {
      name: "adn-ui-mcp",
      version: "0.1.0",
    },
  },
);

export const GET = handler;
export const POST = handler;
