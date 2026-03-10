import { createContext, use } from "react";
import type { sliderVariants } from "./slider.variants";

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
