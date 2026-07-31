"use client";

import { createContext, useContext } from "react";

import { inputVariants } from "./input.variants";

export type InputContext = {
  slots: ReturnType<typeof inputVariants>;
};

export const InputContext = createContext<InputContext | null>(null);

export const useInputContext = () => {
  const context = useContext(InputContext);
  return context ?? { slots: inputVariants() };
};
