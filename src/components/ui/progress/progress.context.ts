"use client";

import { createContext, useContext } from "react";

import { progressVariants } from "./progress.variants";

export type ProgressContext = {
  slots: ReturnType<typeof progressVariants>;
};

export const ProgressContext = createContext<ProgressContext | null>(null);

export const useProgressContext = () => {
  const context = useContext(ProgressContext);
  return context ?? { slots: progressVariants() };
};
