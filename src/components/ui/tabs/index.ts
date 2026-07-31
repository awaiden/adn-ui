import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from "./tabs";

export const Tabs = {
  Indicator: TabsIndicator,
  List: TabsList,
  Panel: TabsPanel,
  Root: TabsRoot,
  Tab: TabsTab,
};

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
