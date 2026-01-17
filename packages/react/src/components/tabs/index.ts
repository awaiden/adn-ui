import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from "./tabs";

export const Tabs = Object.assign(TabsRoot, {
  Indicator: TabsIndicator,
  List: TabsList,
  Panel: TabsPanel,
  Root: TabsRoot,
  Tab: TabsTab,
});

export * from "./tabs";

export type { TabsVariants } from "./tabs.variants";
export { tabsVariants } from "./tabs.variants";
