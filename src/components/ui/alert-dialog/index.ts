import {
  AlertDialogActions,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/alert-dialog/content.md
 */
export const AlertDialog = {
  Actions: AlertDialogActions,
  Backdrop: AlertDialogBackdrop,
  Close: AlertDialogClose,
  Description: AlertDialogDescription,
  Overlay: AlertDialogOverlay,
  Popup: AlertDialogPopup,
  Portal: AlertDialogPortal,
  Root: AlertDialogRoot,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
};

export {
  AlertDialogActions,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
};

export type {
  AlertDialogActionsProps,
  AlertDialogBackdropProps,
  AlertDialogCloseProps,
  AlertDialogDescriptionProps,
  AlertDialogOverlayProps,
  AlertDialogPopupProps,
  AlertDialogPortalProps,
  AlertDialogProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps,
} from "./alert-dialog";
export { AlertDialogContext, useAlertDialogContext } from "./alert-dialog.context";
export { type AlertDialogVariants, alertDialogVariants } from "./alert-dialog.variants";
