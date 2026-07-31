"use client";

import { createContext, useContext } from "react";

import { switchVariants } from "./switch.variants";

export type SwitchContext = {
  slots: ReturnType<typeof switchVariants>;
};

export const SwitchContext = createContext<SwitchContext | null>(null);

export const useSwitchContext = () => {
  const context = useContext(SwitchContext);
  return context ?? { slots: switchVariants() };
};
