"use client";

import { createContext, useContext } from "react";

import { sliderVariants } from "./slider.variants";

export type SliderContext = {
  slots: ReturnType<typeof sliderVariants>;
};

export const SliderContext = createContext<SliderContext | null>(null);

export const useSliderContext = () => {
  const context = useContext(SliderContext);
  return context ?? { slots: sliderVariants() };
};
