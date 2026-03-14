import type { alertDialogVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface AlertDialogContextValue {
	slots: ReturnType<typeof alertDialogVariants>;
}

export const [getAlertDialogContext, setAlertDialogContext] =
	createContext<AlertDialogContextValue>();
