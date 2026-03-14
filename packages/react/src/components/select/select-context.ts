import type { selectVariants } from "@adn-ui/core";
import { createContext, use } from "react";

type SelectContextValue = {
	slots: ReturnType<typeof selectVariants>;
};

export const SelectContext = createContext<SelectContextValue | null>(null);

export function useSelectContext() {
	const context = use(SelectContext);

	if (!context) {
		throw new Error("useSelectContext must be used within a SelectRoot");
	}

	return context;
}
