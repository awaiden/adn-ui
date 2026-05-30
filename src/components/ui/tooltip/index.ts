import { TooltipContent } from "./tooltip-content";
import { TooltipProvider } from "./tooltip-provider";
import { TooltipRoot } from "./tooltip-root";
import { TooltipTrigger } from "./tooltip-trigger";

export const Tooltip = {
  Content: TooltipContent,
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
};

export { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger };

export { type TooltipVariants, tooltipVariants } from "./tooltip.variants";
