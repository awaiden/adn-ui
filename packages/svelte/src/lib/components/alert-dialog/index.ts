import Action from "./alert-dialog-action.svelte";
import Cancel from "./alert-dialog-cancel.svelte";
import Content from "./alert-dialog-content.svelte";
import Description from "./alert-dialog-description.svelte";
import Footer from "./alert-dialog-footer.svelte";
import Header from "./alert-dialog-header.svelte";
import Overlay from "./alert-dialog-overlay.svelte";
import Portal from "./alert-dialog-portal.svelte";
import Root from "./alert-dialog-root.svelte";
import Title from "./alert-dialog-title.svelte";
import Trigger from "./alert-dialog-trigger.svelte";

export const AlertDialog = {
	Root,
	Action,
	Cancel,
	Content,
	Description,
	Footer,
	Header,
	Overlay,
	Portal,
	Title,
	Trigger,
};

export {
	Root as AlertDialogRoot,
	Action as AlertDialogAction,
	Cancel as AlertDialogCancel,
	Content as AlertDialogContent,
	Description as AlertDialogDescription,
	Footer as AlertDialogFooter,
	Header as AlertDialogHeader,
	Overlay as AlertDialogOverlay,
	Portal as AlertDialogPortal,
	Title as AlertDialogTitle,
	Trigger as AlertDialogTrigger,
};

export { type AlertDialogVariants, alertDialogVariants } from "@adn-ui/core";
