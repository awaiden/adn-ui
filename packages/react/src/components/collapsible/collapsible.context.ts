import { createContext } from "react";

import type { collapsibleVariants } from "./collapsible.variants";

interface CollapsibleContextValue {
  slots: ReturnType<typeof collapsibleVariants>;
}

export const CollapsibleContext = createContext<CollapsibleContextValue | null>(null);
