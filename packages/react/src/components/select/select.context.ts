import { createContext } from "react";

import type { selectVariants } from "./select.variants";

interface SelectContext {
  slots: ReturnType<typeof selectVariants>;
}

export const SelectContext = createContext<SelectContext | null>(null);
