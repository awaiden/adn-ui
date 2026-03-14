import AlertDialogAction from "./alert-dialog-action";
import AlertDialogCancel from "./alert-dialog-cancel";
import AlertDialogContent from "./alert-dialog-content";
import AlertDialogDescription from "./alert-dialog-description";
import AlertDialogFooter from "./alert-dialog-footer";
import AlertDialogHeader from "./alert-dialog-header";
import AlertDialogOverlay from "./alert-dialog-overlay";
import AlertDialogRoot from "./alert-dialog-root";
import AlertDialogTitle from "./alert-dialog-title";
import AlertDialogTrigger from "./alert-dialog-trigger";

export const AlertDialog = {
	Root: AlertDialogRoot,
	Trigger: AlertDialogTrigger,
	Content: AlertDialogContent,
	Header: AlertDialogHeader,
	Footer: AlertDialogFooter,
	Title: AlertDialogTitle,
	Description: AlertDialogDescription,
	Action: AlertDialogAction,
	Cancel: AlertDialogCancel,
	Overlay: AlertDialogOverlay,
};

export {
	AlertDialogRoot,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogOverlay,
};

export type AlertDialogRootProps = React.ComponentProps<typeof AlertDialogRoot>;
export type AlertDialogTriggerProps = React.ComponentProps<
	typeof AlertDialogTrigger
>;
export type AlertDialogContentProps = React.ComponentProps<
	typeof AlertDialogContent
>;
export type AlertDialogHeaderProps = React.ComponentProps<
	typeof AlertDialogHeader
>;
export type AlertDialogFooterProps = React.ComponentProps<
	typeof AlertDialogFooter
>;
export type AlertDialogTitleProps = React.ComponentProps<
	typeof AlertDialogTitle
>;
export type AlertDialogDescriptionProps = React.ComponentProps<
	typeof AlertDialogDescription
>;
export type AlertDialogActionProps = React.ComponentProps<
	typeof AlertDialogAction
>;
export type AlertDialogCancelProps = React.ComponentProps<
	typeof AlertDialogCancel
>;
export type AlertDialogOverlayProps = React.ComponentProps<
	typeof AlertDialogOverlay
>;

export {
	type AlertDialogVariants,
	alertDialogVariants,
} from "@adn-ui/core";
