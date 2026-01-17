import { createContext } from "react";

import type { numberFieldVariants } from "./number-field.variants";

interface NumberFieldContext {
  slots: ReturnType<typeof numberFieldVariants>;
}

export const NumberFieldContext = createContext<NumberFieldContext | null>(null);
