import type { tabsVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface TabsContextValue {
	readonly slots: ReturnType<typeof tabsVariants>;
}

export const [getTabsContext, setTabsContext] =
	createContext<TabsContextValue>();
