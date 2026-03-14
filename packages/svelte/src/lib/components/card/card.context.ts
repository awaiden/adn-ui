import type { cardVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface CardContextValue {
	slots: ReturnType<typeof cardVariants>;
}

export const [getCardContext, setCardContext] =
	createContext<CardContextValue>();
