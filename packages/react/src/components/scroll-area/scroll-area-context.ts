import { createContext, use } from "react";
import type { scrollAreaVariants } from "./scroll-area.variants";

type ScrollAreaContextValue = {
	slots: ReturnType<typeof scrollAreaVariants>;
};

export const ScrollAreaContext = createContext<ScrollAreaContextValue | null>(
	null,
);

export function useScrollAreaContext() {
	const context = use(ScrollAreaContext);

	if (!context) {
		throw new Error(
			"useScrollAreaContext must be used within a ScrollAreaRoot",
		);
	}

	return context;
}
