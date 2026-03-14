import type { collapsibleVariants } from "@adn-ui/core";
import { createContext, useContext } from "react";

interface CollapsibleContextValue {
	slots: ReturnType<typeof collapsibleVariants>;
}

export const CollapsibleContext = createContext<CollapsibleContextValue | null>(
	null,
);

export const useCollapsibleContext = () => {
	const context = useContext(CollapsibleContext);
	if (!context) {
		throw new Error(
			"useCollapsibleContext must be used within a CollapsibleRoot",
		);
	}
	return context;
};
