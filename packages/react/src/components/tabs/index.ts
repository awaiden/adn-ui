import TabsContent from "./tabs-content";
import TabsList from "./tabs-list";
import TabsRoot from "./tabs-root";
import TabsTrigger from "./tabs-trigger";

export const Tabs = {
	Root: TabsRoot,
	List: TabsList,
	Trigger: TabsTrigger,
	Content: TabsContent,
};

export { TabsRoot, TabsList, TabsTrigger, TabsContent };

export type TabsRootProps = React.ComponentProps<typeof TabsRoot>;
export type TabsListProps = React.ComponentProps<typeof TabsList>;
export type TabsTriggerProps = React.ComponentProps<typeof TabsTrigger>;
export type TabsContentProps = React.ComponentProps<typeof TabsContent>;

export { type TabsVariants, tabsVariants } from "@adn-ui/core";
