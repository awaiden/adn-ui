import { createContext } from "react";

import type { comboboxVariants } from "./combobox.variants";

interface ComboboxContext {
  slots: ReturnType<typeof comboboxVariants>;
}

export const ComboboxContext = createContext<ComboboxContext | null>(null);
