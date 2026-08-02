import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { baseOptions } from "@/lib/layout.shared";
import { getEnhancedPageTree } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout tree={getEnhancedPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
