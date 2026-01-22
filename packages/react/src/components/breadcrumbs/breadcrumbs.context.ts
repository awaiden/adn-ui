import { createContext } from "react";

import type { breadcrumbsVariants } from "./breadcrumbs.variants";

interface BreadcrumbsContext {
  slots: ReturnType<typeof breadcrumbsVariants>;
}

export const BreadcrumbsContext = createContext<BreadcrumbsContext | null>(null);
