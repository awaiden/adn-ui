import type { contextMenuVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface ContextMenuContextValue {
	slots: ReturnType<typeof contextMenuVariants>;
}

export const [getContextMenuContext, setContextMenuContext] =
	createContext<ContextMenuContextValue>();
