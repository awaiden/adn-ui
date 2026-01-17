import { createContext } from "react";

import type { scrollAreaVariants } from "./scroll-area.variants";

interface ScrollAreaContext {
  slots: ReturnType<typeof scrollAreaVariants>;
}

export const ScrollAreaContext = createContext<ScrollAreaContext | null>(null);
