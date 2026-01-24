import { tv, type VariantProps } from "tailwind-variants";

export const errorMessageVariants = tv({
  base: "error-message",
});

export type ErrorMessageVariants = VariantProps<typeof errorMessageVariants>;
