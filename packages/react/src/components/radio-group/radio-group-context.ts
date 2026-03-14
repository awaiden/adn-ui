import type { radioGroupVariants } from "@adn-ui/core";
import { createContext, use } from "react";

type RadioGroupContextValue = {
	slots: ReturnType<typeof radioGroupVariants>;
};

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(
	null,
);

export function useRadioGroupContext() {
	const context = use(RadioGroupContext);

	if (!context) {
		throw new Error(
			"useRadioGroupContext must be used within a RadioGroupProvider",
		);
	}

	return context;
}
