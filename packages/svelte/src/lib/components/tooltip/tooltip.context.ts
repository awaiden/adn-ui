import type { tooltipVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface TooltipContextValue {
	readonly slots: ReturnType<typeof tooltipVariants>;
}

export const [getTooltipContext, setTooltipContext] =
	createContext<TooltipContextValue>();
