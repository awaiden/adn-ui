import { tv, type VariantProps } from "tailwind-variants";

export const radioGroupVariants = tv({
  base: "radio-group",
});

export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>;
