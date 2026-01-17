import { createContext } from "react";

import type { tooltipVariants } from "./tooltip.variants";

interface TooltipContextValue {
  slots: ReturnType<typeof tooltipVariants>;
}

export const TooltipContext = createContext<TooltipContextValue | null>(null);
