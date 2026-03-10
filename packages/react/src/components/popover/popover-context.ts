import { createContext, use } from "react";
import type { popoverVariants } from "./popover.variants";

type PopoverContextValue = {
	slots: ReturnType<typeof popoverVariants>;
};

export const PopoverContext = createContext<PopoverContextValue | null>(null);

export function usePopoverContext() {
	const context = use(PopoverContext);

	if (!context) {
		throw new Error("usePopoverContext must be used within a PopoverRoot");
	}

	return context;
}
