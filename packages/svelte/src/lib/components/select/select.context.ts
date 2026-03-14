import type { selectVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface SelectContextValue {
	slots: ReturnType<typeof selectVariants>;
}

export const [getSelectContext, setSelectContext] =
	createContext<SelectContextValue>();
