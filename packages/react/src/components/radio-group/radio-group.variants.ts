import { tv, type VariantProps } from "tailwind-variants";

export const radioGroupVariants = tv({
  base: "radio-group",
  variants: {
    orientation: {
      horizontal: "radio-group--horizontal",
      vertical: "radio-group--vertical",
    },
  },
});

export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>;
