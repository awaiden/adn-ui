import { createContext, use } from "react";
import type { drawerVariants } from "./drawer.variants";

type DrawerContextValue = {
	slots: ReturnType<typeof drawerVariants>;
};

export const DrawerContext = createContext<DrawerContextValue | null>(null);

export function useDrawerContext() {
	const context = use(DrawerContext);

	if (!context) {
		throw new Error("useDrawerContext must be used within a DrawerProvider");
	}

	return context;
}
