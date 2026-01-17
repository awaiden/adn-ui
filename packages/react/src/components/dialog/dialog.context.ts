import { createContext } from "react";

import type { dialogVariants } from "./dialog.variants";

export interface DialogContext {
  slots: ReturnType<typeof dialogVariants>;
}

export const DialogContext = createContext<DialogContext | null>(null);
