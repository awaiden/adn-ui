import type { sliderVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface SliderContextValue {
	readonly slots: ReturnType<typeof sliderVariants>;
}

export const [getSliderContext, setSliderContext] =
	createContext<SliderContextValue>();
