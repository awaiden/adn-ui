"use client";

import { createContext, useContext } from "react";

import { paginationVariants } from "./pagination.variants";

export type PaginationContext = {
  slots: ReturnType<typeof paginationVariants>;
};

export const PaginationContext = createContext<PaginationContext | null>(null);

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  return context ?? { slots: paginationVariants() };
};
