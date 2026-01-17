import { createContext } from "react";

import type { fieldsetVariants } from "./fieldset.variants";

interface FieldsetContext {
  slots: ReturnType<typeof fieldsetVariants>;
}

export const FieldsetContext = createContext<FieldsetContext | null>(null);
