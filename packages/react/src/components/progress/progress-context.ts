import type { progressVariants } from "@adn-ui/core";
import { createContext, use } from "react";

type ProgressContextValue = {
	slots: ReturnType<typeof progressVariants>;
};

export const ProgressContext = createContext<ProgressContextValue | null>(null);

export function useProgressContext() {
	const context = use(ProgressContext);

	if (!context) {
		throw new Error(
			"useProgressContext must be used within a ProgressProvider",
		);
	}

	return context;
}
