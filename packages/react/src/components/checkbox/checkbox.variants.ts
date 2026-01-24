import { tv, type VariantProps } from "tailwind-variants";

export const checkboxVariants = tv({
  slots: {
    root: "checkbox",
    indicator: "checkbox__indicator",
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
