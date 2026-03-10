import { createContext, use } from "react";
import type { checkboxVariants } from "./checkbox.variants";

type CheckboxContextValue = {
	slots: ReturnType<typeof checkboxVariants>;
};

export const CheckboxContext = createContext<CheckboxContextValue | null>(null);

export function useCheckboxContext() {
	const context = use(CheckboxContext);

	if (!context) {
		throw new Error(
			"useCheckboxContext must be used within a CheckboxProvider",
		);
	}

	return context;
}
