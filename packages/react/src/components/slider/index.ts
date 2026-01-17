import {
  SliderControl,
  SliderIndicator,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "./slider";

export const Slider = Object.assign(SliderRoot, {
  Control: SliderControl,
  Indicator: SliderIndicator,
  Root: SliderRoot,
  Thumb: SliderThumb,
  Track: SliderTrack,
  Value: SliderValue,
});

export * from "./slider";

export type { SliderVariants } from "./slider.variants";
export { sliderVariants } from "./slider.variants";
