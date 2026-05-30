import { tv, type VariantProps } from "tailwind-variants";

export const labelVariants = tv({
  slots: {
    root: "label",
  },
});

export type LabelVariants = VariantProps<typeof labelVariants>;
