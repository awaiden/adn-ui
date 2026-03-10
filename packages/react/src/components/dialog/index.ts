import DialogClose from "./dialog-close";
import DialogContent from "./dialog-content";
import DialogDescription from "./dialog-description";
import DialogFooter from "./dialog-footer";
import DialogHeader from "./dialog-header";
import DialogOverlay from "./dialog-overlay";
import DialogPortal from "./dialog-portal";
import DialogRoot from "./dialog-root";
import DialogTitle from "./dialog-title";
import DialogTrigger from "./dialog-trigger";

export const Dialog = {
	Root: DialogRoot,
	Trigger: DialogTrigger,
	Portal: DialogPortal,
	Overlay: DialogOverlay,
	Content: DialogContent,
	Header: DialogHeader,
	Footer: DialogFooter,
	Title: DialogTitle,
	Description: DialogDescription,
	Close: DialogClose,
};

export {
	DialogRoot,
	DialogTrigger,
	DialogPortal,
	DialogOverlay,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
	DialogClose,
};

export type DialogRootProps = React.ComponentProps<typeof DialogRoot>;
export type DialogTriggerProps = React.ComponentProps<typeof DialogTrigger>;
export type DialogPortalProps = React.ComponentProps<typeof DialogPortal>;
export type DialogOverlayProps = React.ComponentProps<typeof DialogOverlay>;
export type DialogContentProps = React.ComponentProps<typeof DialogContent>;
export type DialogHeaderProps = React.ComponentProps<typeof DialogHeader>;
export type DialogFooterProps = React.ComponentProps<typeof DialogFooter>;
export type DialogTitleProps = React.ComponentProps<typeof DialogTitle>;
export type DialogDescriptionProps = React.ComponentProps<
	typeof DialogDescription
>;
export type DialogCloseProps = React.ComponentProps<typeof DialogClose>;

export { type DialogVariants, dialogVariants } from "./dialog.variants";
