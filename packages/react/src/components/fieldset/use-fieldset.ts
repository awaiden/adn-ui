import { useContext } from "react";

import { FieldsetContext } from "./fieldset.context";

export const useFieldset = () => {
  const context = useContext(FieldsetContext);

  if (!context) {
    throw new Error("useFieldset must be used within a FieldsetProvider");
  }

  return context;
};
