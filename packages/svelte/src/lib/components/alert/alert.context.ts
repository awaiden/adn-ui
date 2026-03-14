import type { alertVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface AlertContextValue {
	slots: ReturnType<typeof alertVariants>;
}

export const [getAlertContext, setAlertContext] =
	createContext<AlertContextValue>();
