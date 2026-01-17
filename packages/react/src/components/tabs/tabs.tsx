"use client";

import { Tabs as BaseTabs } from "@base-ui/react";
import React, { useMemo } from "react";
import { cn } from "tailwind-variants";

import { TabsContext } from "./tabs.context";
import { type TabsVariants, tabsVariants } from "./tabs.variants";
import { useTabs } from "./use-tabs";

// Root
export interface TabsProps extends TabsVariants, BaseTabs.Root.Props {}

export const TabsRoot = ({ className, ...props }: TabsProps) => {
  const slots = useMemo(() => tabsVariants(), []);
  const [listRef, setListRef] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!listRef) return;

    const updateIndicator = () => {
      const activeTab = listRef.querySelector<HTMLElement>('[data-state="active"]');
      if (activeTab) {
        const listRect = listRef.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        listRef.style.setProperty("--active-tab-width", `${tabRect.width}px`);
        listRef.style.setProperty(
          "--active-tab-left",
          `${tabRect.left - listRect.left + tabRect.width / 2}px`,
        );
      }
    };

    // Initial update
    updateIndicator();

    // Observer for attribute changes (selection change)
    const observer = new MutationObserver(updateIndicator);
    observer.observe(listRef, {
      attributeFilter: ["data-state"],
      attributes: true,
      subtree: true,
    });

    window.addEventListener("resize", updateIndicator);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [listRef]);

  return (
    <TabsContext.Provider value={{ listRef, setListRef, slots }}>
      <BaseTabs.Root className={cn(className, slots.root())} {...props} />
    </TabsContext.Provider>
  );
};

// List
export interface TabsListProps extends BaseTabs.List.Props {}

export const TabsList = ({ className, ...props }: TabsListProps) => {
  const { slots, setListRef } = useTabs();
  return <BaseTabs.List className={cn(slots.list(), className)} ref={setListRef} {...props} />;
};

// Tab
export interface TabsTabProps extends BaseTabs.Tab.Props {}

export const TabsTab = ({ className, ...props }: TabsTabProps) => {
  const { slots } = useTabs();
  return <BaseTabs.Tab className={cn(slots.tab(), className)} {...props} />;
};

// Indicator
export interface TabsIndicatorProps extends BaseTabs.Indicator.Props {}

export const TabsIndicator = ({ className, ...props }: TabsIndicatorProps) => {
  const { slots } = useTabs();
  return <BaseTabs.Indicator className={cn(slots.indicator(), className)} {...props} />;
};

// Panel
export interface TabsPanelProps extends BaseTabs.Panel.Props {}

export const TabsPanel = ({ className, ...props }: TabsPanelProps) => {
  const { slots } = useTabs();
  return <BaseTabs.Panel className={cn(slots.panel(), className)} {...props} />;
};
