"use client";

import { createContext, useContext } from "react";

import { toggleVariants } from "./toggle.variants";

export type ToggleContext = {
  slots: ReturnType<typeof toggleVariants>;
};

export const ToggleContext = createContext<ToggleContext | null>(null);

export const useToggleContext = () => {
  const context = useContext(ToggleContext);
  return context ?? { slots: toggleVariants() };
};
