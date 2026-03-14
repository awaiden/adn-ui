import TooltipArrow from "./tooltip-arrow";
import TooltipContent from "./tooltip-content";
import TooltipProvider from "./tooltip-provider";
import TooltipRoot from "./tooltip-root";
import TooltipTrigger from "./tooltip-trigger";

export const Tooltip = {
	Arrow: TooltipArrow,
	Content: TooltipContent,
	Provider: TooltipProvider,
	Root: TooltipRoot,
	Trigger: TooltipTrigger,
};

export {
	TooltipProvider,
	TooltipRoot,
	TooltipTrigger,
	TooltipContent,
	TooltipArrow,
};

export type TooltipProviderProps = React.ComponentProps<typeof TooltipProvider>;
export type TooltipRootProps = React.ComponentProps<typeof TooltipRoot>;
export type TooltipTriggerProps = React.ComponentProps<typeof TooltipTrigger>;
export type TooltipContentProps = React.ComponentProps<typeof TooltipContent>;
export type TooltipArrowProps = React.ComponentProps<typeof TooltipArrow>;

export { type TooltipVariants, tooltipVariants } from "@adn-ui/core";
