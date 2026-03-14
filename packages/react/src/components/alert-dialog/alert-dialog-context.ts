import type { alertDialogVariants } from "@adn-ui/core";
import { createContext, useContext } from "react";

interface AlertDialogContextValue {
	slots: ReturnType<typeof alertDialogVariants>;
}

export const AlertDialogContext = createContext<AlertDialogContextValue | null>(
	null,
);

export const useAlertDialogContext = () => {
	const context = useContext(AlertDialogContext);
	if (!context) {
		throw new Error(
			"useAlertDialogContext must be used within an AlertDialogRoot",
		);
	}
	return context;
};
