import {
  PopoverArrow,
  PopoverBackdrop,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
  PopoverViewport,
} from "./popover";

export const Popover = Object.assign(PopoverRoot, {
  Arrow: PopoverArrow,
  Backdrop: PopoverBackdrop,
  Close: PopoverClose,
  Description: PopoverDescription,
  Popup: PopoverPopup,
  Portal: PopoverPortal,
  Positioner: PopoverPositioner,
  Root: PopoverRoot,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
  Viewport: PopoverViewport,
});

export * from "./popover";

export type { PopoverVariants } from "./popover.variants";
export { popoverVariants } from "./popover.variants";
