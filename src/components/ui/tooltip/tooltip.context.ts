"use client";

import { createContext, useContext } from "react";

import { tooltipVariants } from "./tooltip.variants";

export type TooltipContext = {
  slots: ReturnType<typeof tooltipVariants>;
};

export const TooltipContext = createContext<TooltipContext | null>(null);

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  return context ?? { slots: tooltipVariants() };
};
