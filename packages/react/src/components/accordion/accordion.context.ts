import { createContext } from "react";

import type { accordionVariants } from "./accordion.variants";

export interface AccordionContext {
  slots: ReturnType<typeof accordionVariants>;
}

export const AccordionContext = createContext<AccordionContext | null>(null);
