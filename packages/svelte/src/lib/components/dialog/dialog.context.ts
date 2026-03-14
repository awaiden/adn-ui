import type { dialogVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface DialogContextValue {
	slots: ReturnType<typeof dialogVariants>;
}

export const [getDialogContext, setDialogContext] =
	createContext<DialogContextValue>();
