import type { tabsVariants } from "@adn-ui/core";

import { createContext, use } from "react";

type TabsContextValue = {
	slots: ReturnType<typeof tabsVariants>;
};

export const TabsContext = createContext<TabsContextValue | null>(null);

export function useTabsContext() {
	const context = use(TabsContext);

	if (!context) {
		throw new Error("useTabsContext must be used within a TabsProvider");
	}

	return context;
}
