import { tv, type VariantProps } from "tailwind-variants";

export const selectVariants = tv({
  base: "select",
});

export type SelectVariants = VariantProps<typeof selectVariants>;
