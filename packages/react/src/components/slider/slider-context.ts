import type { sliderVariants } from "@adn-ui/core";

import { createContext, use } from "react";

type SliderContextValue = {
	slots: ReturnType<typeof sliderVariants>;
};

export const SliderContext = createContext<SliderContextValue | null>(null);

export function useSliderContext() {
	const context = use(SliderContext);

	if (!context) {
		throw new Error("useSliderContext must be used within a SliderProvider");
	}

	return context;
}
