import { Popover as BasePopover } from "@base-ui/react/popover";

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
} from "./popover";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/popover/content.md
 */
export const Popover = {
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
  createHandle: BasePopover.createHandle,
};

export {
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
};

export type {
  PopoverArrowProps,
  PopoverBackdropProps,
  PopoverCloseProps,
  PopoverDescriptionProps,
  PopoverPopupProps,
  PopoverPortalProps,
  PopoverPositionerProps,
  PopoverProps,
  PopoverTitleProps,
  PopoverTriggerProps,
} from "./popover";
export { PopoverContext, usePopoverContext } from "./popover.context";
export { type PopoverVariants, popoverVariants } from "./popover.variants";
