import {
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipViewport,
} from "./tooltip";

export const Tooltip = {
  Arrow: TooltipArrow,
  Popup: TooltipPopup,
  Portal: TooltipPortal,
  Positioner: TooltipPositioner,
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Viewport: TooltipViewport,
};

export {
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipViewport,
};

export type {
  TooltipArrowProps,
  TooltipPopupProps,
  TooltipPortalProps,
  TooltipPositionerProps,
  TooltipProps,
  TooltipProviderProps,
  TooltipTriggerProps,
  TooltipViewportProps,
} from "./tooltip";
export { TooltipContext, useTooltipContext } from "./tooltip.context";
export { type TooltipVariants, tooltipVariants } from "./tooltip.variants";
