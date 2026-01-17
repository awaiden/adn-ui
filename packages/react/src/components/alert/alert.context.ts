import { createContext } from "react";

import type { alertVariants } from "./alert.variants";

interface AlertContext {
  slots: ReturnType<typeof alertVariants>;
  variant?: keyof typeof alertVariants.variants.variant;
}

export const AlertContext = createContext<AlertContext | null>(null);
