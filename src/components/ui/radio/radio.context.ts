"use client";

import { createContext, useContext } from "react";

import { radioVariants } from "./radio.variants";

export type RadioContext = {
  slots: ReturnType<typeof radioVariants>;
};

export const RadioContext = createContext<RadioContext | null>(null);

export const useRadioContext = () => {
  const context = useContext(RadioContext);
  return context ?? { slots: radioVariants() };
};
