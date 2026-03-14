import type { accordionVariants } from "@adn-ui/core";

import { createContext, useContext } from "react";

interface AccordionContextValue {
	slots: ReturnType<typeof accordionVariants>;
}

export const AccordionContext = createContext<AccordionContextValue | null>(
	null,
);

export const useAccordionContext = () => {
	const context = useContext(AccordionContext);
	if (!context) {
		throw new Error("useAccordionContext must be used within an AccordionRoot");
	}
	return context;
};
