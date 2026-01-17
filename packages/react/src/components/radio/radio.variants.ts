import { tv, type VariantProps } from "tailwind-variants";

export const radioVariants = tv({
  slots: {
    indicator: "radio__indicator",
    root: "radio",
  },
});

export type RadioVariants = VariantProps<typeof radioVariants>;
