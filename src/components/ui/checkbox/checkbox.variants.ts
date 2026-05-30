import { tv, type VariantProps } from "tailwind-variants";

export const checkboxVariants = tv({
  slots: {
    indicator: "checkbox__indicator",
    root: "checkbox",
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
