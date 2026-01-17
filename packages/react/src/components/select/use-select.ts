import { useContext } from "react";

import { SelectContext } from "./select.context";

export const useSelect = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error("useSelect must be used within a SelectProvider");
  }

  return context;
};
