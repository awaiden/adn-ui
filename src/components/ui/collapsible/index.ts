import { CollapsiblePanel, CollapsibleRoot, CollapsibleTrigger } from "./collapsible";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/collapsible/content.md
 */
export const Collapsible = {
  Panel: CollapsiblePanel,
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
};

export { CollapsiblePanel, CollapsibleRoot, CollapsibleTrigger };

export type {
  CollapsiblePanelProps,
  CollapsibleProps,
  CollapsibleTriggerProps,
} from "./collapsible";
export { CollapsibleContext, useCollapsibleContext } from "./collapsible.context";
export { type CollapsibleVariants, collapsibleVariants } from "./collapsible.variants";
