import { createContext } from "react";

import type { progressVariants } from "./progress.variants";

interface ProgressContext {
  slots: ReturnType<typeof progressVariants>;
}

export const ProgressContext = createContext<ProgressContext | null>(null);
