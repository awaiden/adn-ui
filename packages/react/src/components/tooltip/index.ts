import {
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from "./tooltip";

export const Tooltip = Object.assign(TooltipRoot, {
  Arrow: TooltipArrow,
  Popup: TooltipPopup,
  Portal: TooltipPortal,
  Positioner: TooltipPositioner,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
});

export * from "./tooltip";

export type { TooltipVariants } from "./tooltip.variants";
export { tooltipVariants } from "./tooltip.variants";
