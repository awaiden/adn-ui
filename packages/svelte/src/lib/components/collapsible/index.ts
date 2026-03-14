import Content from "./collapsible-content.svelte";
import Root from "./collapsible-root.svelte";
import Trigger from "./collapsible-trigger.svelte";

export const Collapsible = {
	Root,
	Content,
	Trigger,
};

export {
	Root as CollapsibleRoot,
	Content as CollapsibleContent,
	Trigger as CollapsibleTrigger,
};

export { type CollapsibleVariants, collapsibleVariants } from "@adn-ui/core";
