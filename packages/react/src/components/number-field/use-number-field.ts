import { useContext } from "react";

import { NumberFieldContext } from "./number-field.context";

export const useNumberField = () => {
  const context = useContext(NumberFieldContext);

  if (!context) {
    throw new Error("useNumberField must be used within a NumberFieldProvider");
  }

  return context;
};
