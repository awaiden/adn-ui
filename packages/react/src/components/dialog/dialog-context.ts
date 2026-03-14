import type { dialogVariants } from "@adn-ui/core";
import { createContext, use } from "react";

type DialogContextValue = {
	slots: ReturnType<typeof dialogVariants>;
};

export const DialogContext = createContext<DialogContextValue | null>(null);

export function useDialogContext() {
	const context = use(DialogContext);

	if (!context) {
		throw new Error("useDialogContext must be used within a DialogProvider");
	}

	return context;
}
