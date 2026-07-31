"use client";

import { createContext, useContext } from "react";

import { collapsibleVariants } from "./collapsible.variants";

export type CollapsibleContext = {
  slots: ReturnType<typeof collapsibleVariants>;
};

export const CollapsibleContext = createContext<CollapsibleContext | null>(null);

export const useCollapsibleContext = () => {
  const context = useContext(CollapsibleContext);
  return context ?? { slots: collapsibleVariants() };
};
