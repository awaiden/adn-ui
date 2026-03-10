import { createContext, use } from "react";
import type { selectVariants } from "./select.variants";

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
