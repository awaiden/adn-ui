import { createContext } from "react";

export interface FieldValue {
  name: string;
  isRequired?: boolean;
}

export const FieldContext = createContext<FieldValue | null>(null);
FieldContext.displayName = "FieldContext";
