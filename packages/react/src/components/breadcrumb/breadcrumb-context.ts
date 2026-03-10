import { createContext, use } from "react";
import type { breadcrumbVariants } from "./breadcrumb.variants";

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
