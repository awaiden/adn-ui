import { createContext } from "react";

import type { popoverVariants } from "./popover.variants";

interface PopoverContext {
  slots: ReturnType<typeof popoverVariants>;
}

export const PopoverContext = createContext<PopoverContext | null>(null);
