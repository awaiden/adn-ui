"use client";

import { createContext, useContext } from "react";

import { spinnerVariants } from "./spinner.variants";

export type SpinnerContext = {
  slots: ReturnType<typeof spinnerVariants>;
};

export const SpinnerContext = createContext<SpinnerContext | null>(null);

export const useSpinnerContext = () => {
  const context = useContext(SpinnerContext);
  return context ?? { slots: spinnerVariants() };
};
