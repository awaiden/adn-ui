import { createContext, use } from "react";
import type { progressVariants } from "./progress.variants";

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
