import {
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipRoot,
  TooltipTitle,
  TooltipDescription,
  TooltipTrigger,
} from "./tooltip";

export const Tooltip = Object.assign(TooltipRoot, {
  Arrow: TooltipArrow,
  Popup: TooltipPopup,
  Portal: TooltipPortal,
  Positioner: TooltipPositioner,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Title: TooltipTitle,
  Description: TooltipDescription,
});

export * from "./tooltip";

export type { TooltipVariants } from "./tooltip.variants";
export { tooltipVariants } from "./tooltip.variants";
