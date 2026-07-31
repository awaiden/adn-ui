import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogOverlay,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export const Dialog = {
  Backdrop: DialogBackdrop,
  Close: DialogClose,
  Description: DialogDescription,
  Overlay: DialogOverlay,
  Popup: DialogPopup,
  Portal: DialogPortal,
  Root: DialogRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
};

export {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogOverlay,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
};

export type {
  DialogBackdropProps,
  DialogCloseProps,
  DialogDescriptionProps,
  DialogOverlayProps,
  DialogPopupProps,
  DialogPortalProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "./dialog";
export { DialogContext, useDialogContext } from "./dialog.context";
export { type DialogVariants, dialogVariants } from "./dialog.variants";
