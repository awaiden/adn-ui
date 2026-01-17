import { tv, type VariantProps } from "tailwind-variants";

export const sliderVariants = tv({
  slots: {
    control: "slider__control",
    indicator: "slider__indicator",
    root: "slider",
    thumb: "slider__thumb",
    track: "slider__track",
    value: "slider__value",
  },
});

export type SliderVariants = VariantProps<typeof sliderVariants>;
