import { createContext } from "react";

import type { fieldVariants } from "./field.variants";

interface FieldContext {
  slots: ReturnType<typeof fieldVariants>;
  required?: boolean;
}

export const FieldContext = createContext<FieldContext | null>(null);
