import { tv, type VariantProps } from "tailwind-variants";

export const labelVariants = tv({
  base: "label",
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      lg: "label--lg",
      md: "label--md",
      sm: "label--sm",
    },
  },
});

export type LabelVariants = VariantProps<typeof labelVariants>;
