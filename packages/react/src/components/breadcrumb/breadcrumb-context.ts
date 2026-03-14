import type { breadcrumbVariants } from "@adn-ui/core";
import { createContext, use } from "react";

type BreadcrumbContextValue = {
	slots: ReturnType<typeof breadcrumbVariants>;
};

export const BreadcrumbContext = createContext<BreadcrumbContextValue | null>(
	null,
);

export function useBreadcrumbContext() {
	const context = use(BreadcrumbContext);

	if (!context) {
		throw new Error(
			"useBreadcrumbContext must be used within a BreadcrumbProvider",
		);
	}

	return context;
}
