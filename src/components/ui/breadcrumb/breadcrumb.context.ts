import { createContext, useContext } from "react";

import { breadcrumbVariants } from "./breadcrumb.variants";

export type BreadcrumbContext = {
  slots: ReturnType<typeof breadcrumbVariants>;
};

export const BreadcrumbContext = createContext<BreadcrumbContext | null>(null);

export const useBreadcrumbContext = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumbContext must be used within a Breadcrumb.Root");
  }
  return context;
};
