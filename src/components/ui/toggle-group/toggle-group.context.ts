"use client";

import { createContext, useContext } from "react";

import { toggleGroupVariants } from "./toggle-group.variants";

export type ToggleGroupContext = {
  slots: ReturnType<typeof toggleGroupVariants>;
};

export const ToggleGroupContext = createContext<ToggleGroupContext | null>(null);

export const useToggleGroupContext = () => {
  const context = useContext(ToggleGroupContext);
  return context ?? { slots: toggleGroupVariants() };
};
