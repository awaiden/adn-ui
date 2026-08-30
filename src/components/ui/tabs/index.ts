import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from "./tabs";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/tabs/content.md
 */
export const Tabs = Object.assign(TabsRoot, {
  Indicator: TabsIndicator,
  List: TabsList,
  Panel: TabsPanel,
  Root: TabsRoot,
  Tab: TabsTab,
  indicator: TabsIndicator,
  list: TabsList,
  panel: TabsPanel,
  root: TabsRoot,
  tab: TabsTab,
});

export { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab };

export type {
  TabsIndicatorProps,
  TabsListProps,
  TabsPanelProps,
  TabsProps,
  TabsTabProps,
} from "./tabs";
export { TabsContext, useTabsContext } from "./tabs.context";
export { type TabsVariants, tabsVariants } from "./tabs.variants";
