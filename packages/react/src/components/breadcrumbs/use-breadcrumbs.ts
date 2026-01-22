import { useContext } from "react";

import { BreadcrumbsContext } from "./breadcrumbs.context";

export const useBreadcrumbs = () => {
  const context = useContext(BreadcrumbsContext);

  if (!context) {
    throw new Error("useBreadcrumbs must be used within a BreadcrumbsProvider");
  }

  return context;
};
