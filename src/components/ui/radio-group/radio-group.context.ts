import { createContext, useContext } from "react";

import { radioGroupVariants } from "./radio-group.variants";

export type RadioGroupContext = {
  slots: ReturnType<typeof radioGroupVariants>;
};

export const RadioGroupContext = createContext<null | RadioGroupContext>(null);

export const useRadioGroupContext = () => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error("useRadioGroupContext must be used within a RadioGroup");
  }
  return context;
};
