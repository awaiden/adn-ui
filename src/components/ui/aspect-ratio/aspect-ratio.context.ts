"use client";

import { createContext, useContext } from "react";

import { aspectRatioVariants } from "./aspect-ratio.variants";

export type AspectRatioContext = {
  slots: ReturnType<typeof aspectRatioVariants>;
};

export const AspectRatioContext = createContext<AspectRatioContext | null>(null);

export const useAspectRatioContext = () => {
  const context = useContext(AspectRatioContext);
  return context ?? { slots: aspectRatioVariants() };
};
