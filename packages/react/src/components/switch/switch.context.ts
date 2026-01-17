import { createContext } from "react";

import type { switchVariants } from "./switch.variants";

interface SwitchContext {
  slots: ReturnType<typeof switchVariants>;
}

export const SwitchContext = createContext<SwitchContext | null>(null);
