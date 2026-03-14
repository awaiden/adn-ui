import type { breadcrumbVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface BreadcrumbContextValue {
	slots: ReturnType<typeof breadcrumbVariants>;
}

export const [getBreadcrumbContext, setBreadcrumbContext] =
	createContext<BreadcrumbContextValue>();
