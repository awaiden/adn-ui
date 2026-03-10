import DrawerClose from "./drawer-close";
import DrawerContent from "./drawer-content";
import DrawerDescription from "./drawer-description";
import DrawerFooter from "./drawer-footer";
import DrawerHeader from "./drawer-header";
import DrawerOverlay from "./drawer-overlay";
import DrawerPortal from "./drawer-portal";
import DrawerRoot from "./drawer-root";
import DrawerTitle from "./drawer-title";
import DrawerTrigger from "./drawer-trigger";

export const Drawer = {
	Root: DrawerRoot,
	Trigger: DrawerTrigger,
	Portal: DrawerPortal,
	Overlay: DrawerOverlay,
	Content: DrawerContent,
	Header: DrawerHeader,
	Footer: DrawerFooter,
	Title: DrawerTitle,
	Description: DrawerDescription,
	Close: DrawerClose,
};

export {
	DrawerRoot,
	DrawerTrigger,
	DrawerPortal,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerDescription,
	DrawerClose,
};

export type DrawerRootProps = React.ComponentProps<typeof DrawerRoot>;
export type DrawerTriggerProps = React.ComponentProps<typeof DrawerTrigger>;
export type DrawerPortalProps = React.ComponentProps<typeof DrawerPortal>;
export type DrawerOverlayProps = React.ComponentProps<typeof DrawerOverlay>;
export type DrawerContentProps = React.ComponentProps<typeof DrawerContent>;
export type DrawerHeaderProps = React.ComponentProps<typeof DrawerHeader>;
export type DrawerFooterProps = React.ComponentProps<typeof DrawerFooter>;
export type DrawerTitleProps = React.ComponentProps<typeof DrawerTitle>;
export type DrawerDescriptionProps = React.ComponentProps<
	typeof DrawerDescription
>;
export type DrawerCloseProps = React.ComponentProps<typeof DrawerClose>;

export { type DrawerVariants, drawerVariants } from "./drawer.variants";
