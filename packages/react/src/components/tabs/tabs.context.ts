import { createContext } from "react";

import type { tabsVariants } from "./tabs.variants";

interface TabsContext {
  slots: ReturnType<typeof tabsVariants>;
  listRef: HTMLDivElement | null;
  setListRef: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
}

export const TabsContext = createContext<TabsContext | null>(null);
