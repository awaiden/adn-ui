import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogViewport,
} from "./dialog";

export const Dialog = Object.assign(DialogRoot, {
  Backdrop: DialogBackdrop,
  Close: DialogClose,
  Description: DialogDescription,
  Popup: DialogPopup,
  Portal: DialogPortal,
  Root: DialogRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
  Viewport: DialogViewport,
  Content: DialogContent,
});

export * from "./dialog";

export type { DialogVariants } from "./dialog.variants";
export { dialogVariants } from "./dialog.variants";
