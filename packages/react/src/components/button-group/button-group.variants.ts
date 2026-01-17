import { tv, type VariantProps } from "tailwind-variants";

export const buttonGroupVariants = tv({
  base: "button-group",
});

export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>;
