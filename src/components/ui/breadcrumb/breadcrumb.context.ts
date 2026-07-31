"use client";

import { createContext, useContext } from "react";

import { breadcrumbVariants } from "./breadcrumb.variants";

export type BreadcrumbContext = {
  slots: ReturnType<typeof breadcrumbVariants>;
};

export const BreadcrumbContext = createContext<BreadcrumbContext | null>(null);

export const useBreadcrumbContext = () => {
  const context = useContext(BreadcrumbContext);
  return context ?? { slots: breadcrumbVariants() };
};
