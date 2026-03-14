import Arrow from "./popover-arrow.svelte";
import Close from "./popover-close.svelte";
import Content from "./popover-content.svelte";
import Portal from "./popover-portal.svelte";
import Root from "./popover-root.svelte";
import Trigger from "./popover-trigger.svelte";

export const Popover = {
	Root,
	Trigger,
	Portal,
	Content,
	Close,
	Arrow,
};

export {
	Root as PopoverRoot,
	Trigger as PopoverTrigger,
	Portal as PopoverPortal,
	Content as PopoverContent,
	Close as PopoverClose,
	Arrow as PopoverArrow,
};

export { type PopoverVariants, popoverVariants } from "@adn-ui/core";
