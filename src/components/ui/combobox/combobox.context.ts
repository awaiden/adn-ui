"use client";

import { createContext, useContext } from "react";

import { comboboxVariants } from "./combobox.variants";

export type ComboboxContext = {
  slots: ReturnType<typeof comboboxVariants>;
};

export const ComboboxContext = createContext<ComboboxContext | null>(null);

export const useComboboxContext = () => {
  const context = useContext(ComboboxContext);
  return context ?? { slots: comboboxVariants() };
};
