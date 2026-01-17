import { tv, type VariantProps } from "tailwind-variants";

export const checkboxGroupVariants = tv({
  base: "checkbox-group",
});

export type CheckboxGroupVariants = VariantProps<typeof checkboxGroupVariants>;
