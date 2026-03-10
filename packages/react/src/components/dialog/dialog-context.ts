import { createContext, use } from "react";
import type { dialogVariants } from "./dialog.variants";

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
