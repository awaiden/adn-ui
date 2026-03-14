import type { fieldVariants } from "@adn-ui/core";
import { createContext, useContext } from "react";

interface FieldContextValue {
	id: string;
	slots: ReturnType<typeof fieldVariants>;
}

export const FieldContext = createContext<FieldContextValue | null>(null);

export const useFieldContext = () => {
	const context = useContext(FieldContext);
	if (!context) {
		throw new Error("useFieldContext must be used within a FieldProvider");
	}
	return context;
};
