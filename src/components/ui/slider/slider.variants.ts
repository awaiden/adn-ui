import { tv, type VariantProps } from "tailwind-variants";

export const sliderVariants = tv({
  slots: {
    range: "slider__range",
    root: "slider",
    thumb: "slider__thumb",
    track: "slider__track",
  },
});

export type SliderVariants = VariantProps<typeof sliderVariants>;
