"use client";

import { createContext, useContext } from "react";

import { checkboxVariants } from "./checkbox.variants";

export type CheckboxContext = {
  slots: ReturnType<typeof checkboxVariants>;
};

export const CheckboxContext = createContext<CheckboxContext | null>(null);

export const useCheckboxContext = () => {
  const context = useContext(CheckboxContext);
  return context ?? { slots: checkboxVariants() };
};
