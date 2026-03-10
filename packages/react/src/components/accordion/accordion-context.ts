import { createContext, useContext } from "react";

import type { accordionVariants } from "./accordion.variants";

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
