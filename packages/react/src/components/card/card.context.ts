import { createContext } from "react";

import type { cardVariants } from "./card.variants";

export interface CardContext {
  slots: ReturnType<typeof cardVariants>;
}

export const CardContext = createContext<CardContext | null>(null);
