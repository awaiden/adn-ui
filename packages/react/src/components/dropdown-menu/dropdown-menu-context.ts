import type { dropdownMenuVariants } from "@adn-ui/core";

import { createContext, use } from "react";

type DropdownMenuContextValue = {
	slots: ReturnType<typeof dropdownMenuVariants>;
};

export const DropdownMenuContext =
	createContext<DropdownMenuContextValue | null>(null);

export function useDropdownMenuContext() {
	const context = use(DropdownMenuContext);

	if (!context) {
		throw new Error(
			"useDropdownMenuContext must be used within a DropdownMenuRoot",
		);
	}

	return context;
}
