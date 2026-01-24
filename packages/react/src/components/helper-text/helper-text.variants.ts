import { tv, type VariantProps } from "tailwind-variants";

export const helperTextVariants = tv({
  base: "helper-text",
});

export type HelperTextVariants = VariantProps<typeof helperTextVariants>;
