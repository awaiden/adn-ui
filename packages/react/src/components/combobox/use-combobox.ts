import { useContext } from "react";

import { ComboboxContext } from "./combobox.context";

export const useCombobox = () => {
  const context = useContext(ComboboxContext);

  if (!context) {
    throw new Error("useCombobox must be used within a ComboboxProvider");
  }

  return context;
};
