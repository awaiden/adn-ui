import { tv, type VariantProps } from "tailwind-variants";

export const formVariants = tv({
  base: "form",
});

export type FormVariants = VariantProps<typeof formVariants>;
