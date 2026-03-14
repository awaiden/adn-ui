import Close from "./dialog-close.svelte";
import Content from "./dialog-content.svelte";
import Description from "./dialog-description.svelte";
import Footer from "./dialog-footer.svelte";
import Header from "./dialog-header.svelte";
import Overlay from "./dialog-overlay.svelte";
import Portal from "./dialog-portal.svelte";
import Root from "./dialog-root.svelte";
import Title from "./dialog-title.svelte";
import Trigger from "./dialog-trigger.svelte";

export const Dialog = {
	Root,
	Content,
	Description,
	Footer,
	Header,
	Overlay,
	Portal,
	Title,
	Trigger,
	Close,
};

export {
	Root as DialogRoot,
	Content as DialogContent,
	Description as DialogDescription,
	Footer as DialogFooter,
	Header as DialogHeader,
	Overlay as DialogOverlay,
	Portal as DialogPortal,
	Title as DialogTitle,
	Trigger as DialogTrigger,
	Close as DialogClose,
};

export { type DialogVariants, dialogVariants } from "@adn-ui/core";
