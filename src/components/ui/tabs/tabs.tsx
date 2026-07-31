"use client";

import "./tabs.css";

import type React from "react";

import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { cn } from "tailwind-variants";

import { TabsContext, useTabsContext } from "./tabs.context";
import { tabsVariants, type TabsVariants } from "./tabs.variants";

export type TabsProps = TabsVariants & React.ComponentProps<typeof BaseTabs.Root>;

export const TabsRoot = ({ children, className, variant, size, ...props }: TabsProps) => {
  const slots = tabsVariants({ variant, size });

  return (
    <TabsContext.Provider value={{ slots }}>
      <BaseTabs.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseTabs.Root>
    </TabsContext.Provider>
  );
};

export type TabsListProps = React.ComponentProps<typeof BaseTabs.List>;

export const TabsList = ({ className, ...props }: TabsListProps) => {
  const { slots } = useTabsContext();
  return <BaseTabs.List className={cn(slots.list(), className)} {...props} />;
};

export type TabsTabProps = React.ComponentProps<typeof BaseTabs.Tab>;

export const TabsTab = ({ className, ...props }: TabsTabProps) => {
  const { slots } = useTabsContext();
  return <BaseTabs.Tab className={cn(slots.tab(), className)} {...props} />;
};

export type TabsIndicatorProps = React.ComponentProps<typeof BaseTabs.Indicator>;

export const TabsIndicator = ({ className, ...props }: TabsIndicatorProps) => {
  const { slots } = useTabsContext();
  return <BaseTabs.Indicator className={cn(slots.indicator(), className)} {...props} />;
};

export type TabsPanelProps = React.ComponentProps<typeof BaseTabs.Panel>;

export const TabsPanel = ({ className, ...props }: TabsPanelProps) => {
  const { slots } = useTabsContext();
  return <BaseTabs.Panel className={cn(slots.panel(), className)} {...props} />;
};
