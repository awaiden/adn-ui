import { createContext } from "react";

export interface FieldContextValue {
  name: string;
  isRequired?: boolean;
  error?: string | boolean;
}

export const FieldContext = createContext<FieldContextValue | null>(null);
FieldContext.displayName = "FieldContext";
