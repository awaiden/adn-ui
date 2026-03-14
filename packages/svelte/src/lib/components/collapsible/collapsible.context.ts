import type { collapsibleVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface CollapsibleContextValue {
	slots: ReturnType<typeof collapsibleVariants>;
}

export const [getCollapsibleContext, setCollapsibleContext] =
	createContext<CollapsibleContextValue>();
