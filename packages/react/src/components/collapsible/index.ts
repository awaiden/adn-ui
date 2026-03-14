import CollapsibleContent from "./collapsible-content";
import CollapsibleRoot from "./collapsible-root";
import CollapsibleTrigger from "./collapsible-trigger";

export const Collapsible = {
  Content: CollapsibleContent,
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
};

export { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent };

export type CollapsibleRootProps = React.ComponentProps<typeof CollapsibleRoot>;
export type CollapsibleTriggerProps = React.ComponentProps<typeof CollapsibleTrigger>;
export type CollapsibleContentProps = React.ComponentProps<typeof CollapsibleContent>;

export { type CollapsibleVariants, collapsibleVariants } from "@adn-ui/core";
