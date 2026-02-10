import { use } from "react";

import { FieldContext } from "./context";

export const useField = () => {
  const context = use(FieldContext);

  if (!context) {
    throw new Error("useField must be used within a FieldProvider");
  }

  return context;
};

export const useFieldOptional = () => {
  const context = use(FieldContext);

  return context;
};
