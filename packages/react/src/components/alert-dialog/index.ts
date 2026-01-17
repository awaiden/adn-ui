import {
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogViewport,
  AlertDialogContent,
} from "./alert-dialog";

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Backdrop: AlertDialogBackdrop,
  Close: AlertDialogClose,
  Description: AlertDialogDescription,
  Popup: AlertDialogPopup,
  Portal: AlertDialogPortal,
  Root: AlertDialogRoot,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Viewport: AlertDialogViewport,
});

export * from "./alert-dialog";

export type { AlertDialogVariants } from "./alert-dialog.variants";
export { alertDialogVariants } from "./alert-dialog.variants";
