import { TabsContent } from "./tabs-content";
import { TabsList } from "./tabs-list";
import { TabsRoot } from "./tabs-root";
import { TabsTrigger } from "./tabs-trigger";

export const Tabs = {
  Content: TabsContent,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
};

export { TabsContent, TabsList, TabsRoot, TabsTrigger };

export type { TabsContentProps } from "./tabs-content";

export type { TabsListProps } from "./tabs-list";

export type { TabsRootProps } from "./tabs-root";
export type { TabsTriggerProps } from "./tabs-trigger";
export { TabsContext, useTabsContext } from "./tabs.context";
export { type TabsVariants, tabsVariants } from "./tabs.variants";
