"use client";

import { createContext, useContext } from "react";

import { tabsVariants } from "./tabs.variants";

export type TabsContext = {
  slots: ReturnType<typeof tabsVariants>;
};

export const TabsContext = createContext<TabsContext | null>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  return context ?? { slots: tabsVariants() };
};
