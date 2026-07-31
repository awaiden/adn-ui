"use client";

import { createContext, useContext } from "react";

import { fieldVariants } from "./field.variants";

export type FieldContext = {
  slots: ReturnType<typeof fieldVariants>;
};

export const FieldContext = createContext<FieldContext | null>(null);

export const useFieldContext = () => {
  const context = useContext(FieldContext);
  return context ?? { slots: fieldVariants() };
};
