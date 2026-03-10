import { createContext, useContext } from "react";
import type { alertDialogVariants } from "./alert-dialog.variants";

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
