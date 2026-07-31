/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const sliderVariants = tv({
  slots: {
    root: "slider",
    label: "slider__label",
    value: "slider__value",
    control: "slider__control",
    track: "slider__track",
    indicator: "slider__indicator",
    thumb: "slider__thumb",
  },
  variants: {
    size: {
      sm: {
        track: "slider__track--sm",
        thumb: "slider__thumb--sm",
      },
      md: {
        track: "slider__track--md",
        thumb: "slider__thumb--md",
      },
      lg: {
        track: "slider__track--lg",
        thumb: "slider__thumb--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type SliderVariants = VariantProps<typeof sliderVariants>;
