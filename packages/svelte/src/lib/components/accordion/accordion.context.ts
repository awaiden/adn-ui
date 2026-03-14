import type { accordionVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface AccordionContextValue {
	slots: ReturnType<typeof accordionVariants>;
}

export const [getAccordionContext, setAccordionContext] =
	createContext<AccordionContextValue>();
