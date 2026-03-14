import type { tableVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface TableContextValue {
	slots: ReturnType<typeof tableVariants>;
}

export const [getTableContext, setTableContext] =
	createContext<TableContextValue>();
