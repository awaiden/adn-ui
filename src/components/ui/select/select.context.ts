"use client";

import { createContext, useContext } from "react";

import { selectVariants } from "./select.variants";

export type SelectContext = {
  slots: ReturnType<typeof selectVariants>;
};

export const SelectContext = createContext<SelectContext | null>(null);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  return context ?? { slots: selectVariants() };
};
