import { createContext } from "react";

import type { listVariants } from "./list.variants";

export interface ListContext {
  slots: ReturnType<typeof listVariants>;
}

export const ListContext = createContext<ListContext | null>(null);
