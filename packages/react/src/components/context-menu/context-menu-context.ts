import { createContext, use } from "react";
import type { contextMenuVariants } from "./context-menu.variants";

type ContextMenuContextValue = {
	slots: ReturnType<typeof contextMenuVariants>;
};

export const ContextMenuContext = createContext<ContextMenuContextValue | null>(
	null,
);

export function useContextMenuContext() {
	const context = use(ContextMenuContext);

	if (!context) {
		throw new Error(
			"useContextMenuContext must be used within a ContextMenuRoot",
		);
	}

	return context;
}
