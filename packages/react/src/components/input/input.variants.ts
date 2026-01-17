import { tv, type VariantProps } from "tailwind-variants";

export const inputVariants = tv({
  base: "input",
});

export type InputVariants = VariantProps<typeof inputVariants>;
