import type { dropdownMenuVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface DropdownMenuContextValue {
	slots: ReturnType<typeof dropdownMenuVariants>;
}

export const [getDropdownMenuContext, setDropdownMenuContext] =
	createContext<DropdownMenuContextValue>();
