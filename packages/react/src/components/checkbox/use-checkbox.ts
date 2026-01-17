import { useContext } from "react";

import { CheckboxContext } from "./checkbox.context";

export const useCheckbox = () => {
  const context = useContext(CheckboxContext);

  if (!context) {
    throw new Error("useCheckbox must be used within a CheckboxProvider");
  }

  return context;
};
