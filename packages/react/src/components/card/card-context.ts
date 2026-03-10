import { createContext, useContext } from "react";

import type { cardVariants } from "./card.variants";

interface CardContextValue {
	slots: ReturnType<typeof cardVariants>;
}

export const CardContext = createContext<CardContextValue | null>(null);

export const useCardContext = () => {
	const context = useContext(CardContext);
	if (!context) {
		throw new Error("useCardContext must be used within a CardProvider");
	}
	return context;
};
