import CollapsibleContent from "./collapsible-content";
import CollapsibleRoot from "./collapsible-root";
import CollapsibleTrigger from "./collapsible-trigger";

export const Collapsible = {
	Root: CollapsibleRoot,
	Trigger: CollapsibleTrigger,
	Content: CollapsibleContent,
};

export { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent };

export type CollapsibleRootProps = React.ComponentProps<typeof CollapsibleRoot>;
export type CollapsibleTriggerProps = React.ComponentProps<
	typeof CollapsibleTrigger
>;
export type CollapsibleContentProps = React.ComponentProps<
	typeof CollapsibleContent
>;

export {
	type CollapsibleVariants,
	collapsibleVariants,
} from "@adn-ui/core";
