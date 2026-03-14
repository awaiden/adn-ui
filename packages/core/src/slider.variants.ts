import { tv, type VariantProps } from "tailwind-variants";

export const sliderVariants = tv({
  defaultVariants: {
    size: "md",
  },
  slots: {
    range: "slider__range",
    root: "slider",
    thumb: "slider__thumb",
    track: "slider__track",
  },
  variants: {
    size: {
      lg: {
        root: "slider--lg",
        thumb: "slider__thumb--lg",
        track: "slider__track--lg",
      },
      md: {
        root: "slider--md",
        thumb: "slider__thumb--md",
        track: "slider__track--md",
      },
      sm: {
        root: "slider--sm",
        thumb: "slider__thumb--sm",
        track: "slider__track--sm",
      },
    },
  },
});

export type SliderVariants = VariantProps<typeof sliderVariants>;
