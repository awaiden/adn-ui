import {
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "./slider";

export const Slider = {
  Control: SliderControl,
  Indicator: SliderIndicator,
  Label: SliderLabel,
  Root: SliderRoot,
  Thumb: SliderThumb,
  Track: SliderTrack,
  Value: SliderValue,
};

export {
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
};

export type {
  SliderControlProps,
  SliderIndicatorProps,
  SliderLabelProps,
  SliderProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderValueProps,
} from "./slider";
export { SliderContext, useSliderContext } from "./slider.context";
export { type SliderVariants, sliderVariants } from "./slider.variants";
