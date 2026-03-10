import { createContext, use } from "react";
import type { tooltipVariants } from "./tooltip.variants";

type TooltipContextValue = {
	slots: ReturnType<typeof tooltipVariants>;
};

export const TooltipContext = createContext<TooltipContextValue | null>(null);

export function useTooltipContext() {
	const context = use(TooltipContext);

	if (!context) {
		throw new Error("useTooltipContext must be used within a TooltipRoot");
	}

	return context;
}
