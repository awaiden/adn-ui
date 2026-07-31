"use client";

import { createContext, useContext } from "react";

import { popoverVariants } from "./popover.variants";

export type PopoverContext = {
  slots: ReturnType<typeof popoverVariants>;
};

export const PopoverContext = createContext<PopoverContext | null>(null);

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  return context ?? { slots: popoverVariants() };
};
