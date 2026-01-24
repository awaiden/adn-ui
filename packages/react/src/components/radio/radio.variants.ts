import { tv, type VariantProps } from "tailwind-variants";

export const radioVariants = tv({
  slots: {
    root: "radio",
    indicator: "radio__indicator",
  },
});

export type RadioVariants = VariantProps<typeof radioVariants>;
