import PopoverAnchor from "./popover-anchor";
import PopoverClose from "./popover-close";
import PopoverContent from "./popover-content";
import PopoverRoot from "./popover-root";
import PopoverTrigger from "./popover-trigger";

export const Popover = {
	Root: PopoverRoot,
	Trigger: PopoverTrigger,
	Anchor: PopoverAnchor,
	Content: PopoverContent,
	Close: PopoverClose,
};

export {
	PopoverRoot,
	PopoverTrigger,
	PopoverAnchor,
	PopoverContent,
	PopoverClose,
};

export type PopoverRootProps = React.ComponentProps<typeof PopoverRoot>;
export type PopoverTriggerProps = React.ComponentProps<typeof PopoverTrigger>;
export type PopoverAnchorProps = React.ComponentProps<typeof PopoverAnchor>;
export type PopoverContentProps = React.ComponentProps<typeof PopoverContent>;
export type PopoverCloseProps = React.ComponentProps<typeof PopoverClose>;

export { type PopoverVariants, popoverVariants } from "@adn-ui/core";
