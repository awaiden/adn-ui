import { createContext, useContext } from "react";

import { formVariants } from "./form.variants";

export type FormContext = {
  slots: ReturnType<typeof formVariants>;
};

export const FormContext = createContext<FormContext | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a Form");
  }
  return context;
};
