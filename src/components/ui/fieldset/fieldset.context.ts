"use client";

import { createContext, useContext } from "react";

import { fieldsetVariants } from "./fieldset.variants";

export type FieldsetContext = {
  slots: ReturnType<typeof fieldsetVariants>;
};

export const FieldsetContext = createContext<FieldsetContext | null>(null);

export const useFieldsetContext = () => {
  const context = useContext(FieldsetContext);
  return context ?? { slots: fieldsetVariants() };
};
