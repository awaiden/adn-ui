import type React from "react";

import { highlight } from "fumadocs-core/highlight";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import fs from "node:fs";
import path from "node:path";

import { demos } from "@/demos";

interface ComponentPreviewProps extends React.PropsWithChildren {
  name: string;
}

export default async function ComponentPreview({ name }: ComponentPreviewProps) {
  const demo = demos[name];

  if (!demo) {
    return <div>Demo not found: {name}</div>;
  }

  const Component = demo.component;

  const file = fs.readFileSync(path.join(process.cwd(), "src", "demos", demo.file), "utf-8");

  const highlightedCode = await highlight(file, {
    lang: "tsx",
  });

  return (
    <div>
      <div>
        <Component />
      </div>
      <CodeBlock>
        <Pre>{highlightedCode}</Pre>
      </CodeBlock>
    </div>
  );
}
