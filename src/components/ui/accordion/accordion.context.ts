"use client";

import { createContext, useContext } from "react";

import { accordionVariants } from "./accordion.variants";

export type AccordionContext = {
  slots: ReturnType<typeof accordionVariants>;
};

export const AccordionContext = createContext<AccordionContext | null>(null);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  return context ?? { slots: accordionVariants() };
};
