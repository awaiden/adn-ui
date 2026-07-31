"use client";

import { createContext, useContext } from "react";

import { separatorVariants } from "./separator.variants";

export type SeparatorContext = {
  slots: ReturnType<typeof separatorVariants>;
};

export const SeparatorContext = createContext<SeparatorContext | null>(null);

export const useSeparatorContext = () => {
  const context = useContext(SeparatorContext);
  return context ?? { slots: separatorVariants() };
};
