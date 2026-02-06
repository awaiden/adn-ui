import { createContext } from "react";

import type { radioVariants } from "./radio.variants";

interface RadioContext {
  slots: ReturnType<typeof radioVariants>;
}

export const RadioContext = createContext<RadioContext | null>(null);
