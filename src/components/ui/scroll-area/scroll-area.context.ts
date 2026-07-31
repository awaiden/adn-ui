"use client";

import { createContext, useContext } from "react";

import { scrollAreaVariants } from "./scroll-area.variants";

export type ScrollAreaContext = {
  slots: ReturnType<typeof scrollAreaVariants>;
};

export const ScrollAreaContext = createContext<ScrollAreaContext | null>(null);

export const useScrollAreaContext = () => {
  const context = useContext(ScrollAreaContext);
  return context ?? { slots: scrollAreaVariants() };
};
