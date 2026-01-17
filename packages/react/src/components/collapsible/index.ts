import {
  CollapsibleContent,
  CollapsiblePanel,
  CollapsibleRoot,
  CollapsibleTrigger,
  CollapsibleTriggerIcon,
} from "./collapsible";

export const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Panel: CollapsiblePanel,
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  TriggerIcon: CollapsibleTriggerIcon,
});

export * from "./collapsible";

export type { CollapsibleVariants } from "./collapsible.variants";
export { collapsibleVariants } from "./collapsible.variants";
