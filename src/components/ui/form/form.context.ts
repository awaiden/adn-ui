"use client";

import { createContext, useContext } from "react";

import { formVariants } from "./form.variants";

export type FormContext = {
  slots: ReturnType<typeof formVariants>;
};

export const FormContext = createContext<FormContext | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);
  return context ?? { slots: formVariants() };
};
