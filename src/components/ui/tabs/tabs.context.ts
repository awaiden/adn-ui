import { createContext, useContext } from "react";

import { tabsVariants } from "./tabs.variants";

export type TabsContext = {
  slots: ReturnType<typeof tabsVariants>;
};

export const TabsContext = createContext<null | TabsContext>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within Tabs");
  }
  return context;
};
