import { createContext, useContext } from "react";

import { accordionVariants } from "./accordion.variants";

export type AccordionContext = {
  slots: ReturnType<typeof accordionVariants>;
};

export const AccordionContext = createContext<AccordionContext | null>(null);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordionContext must be used within an Accordion");
  }
  return context;
};
