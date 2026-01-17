import { createContext } from "react";

import type { sliderVariants } from "./slider.variants";

export interface SliderContext {
  slots: ReturnType<typeof sliderVariants>;
}

export const SliderContext = createContext<SliderContext | null>(null);
