import { tv, type VariantProps } from "tailwind-variants";

export const labelVariants = tv({
  base: "label",
});

export type LabelVariants = VariantProps<typeof labelVariants>;
