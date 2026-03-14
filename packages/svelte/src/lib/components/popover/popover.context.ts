import type { popoverVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface PopoverContextValue {
	slots: ReturnType<typeof popoverVariants>;
}

export const [getPopoverContext, setPopoverContext] =
	createContext<PopoverContextValue>();
