"use client";

import { createContext, useContext } from "react";

import { numberFieldVariants } from "./number-field.variants";

export type NumberFieldContext = {
  slots: ReturnType<typeof numberFieldVariants>;
};

export const NumberFieldContext = createContext<NumberFieldContext | null>(null);

export const useNumberFieldContext = () => {
  const context = useContext(NumberFieldContext);
  return context ?? { slots: numberFieldVariants() };
};
