"use client";

import { createContext, useContext } from "react";

import { checkboxGroupVariants } from "./checkbox-group.variants";

export type CheckboxGroupContext = {
  slots: ReturnType<typeof checkboxGroupVariants>;
};

export const CheckboxGroupContext = createContext<CheckboxGroupContext | null>(null);

export const useCheckboxGroupContext = () => {
  const context = useContext(CheckboxGroupContext);
  return context ?? { slots: checkboxGroupVariants() };
};
