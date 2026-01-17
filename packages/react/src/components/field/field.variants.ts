import { tv, type VariantProps } from "tailwind-variants";

export const fieldVariants = tv({
  slots: {
    control: "input field__control",
    description: "field__description",
    error: "field__error",
    label: "label field__label",
    root: "field",
  },
});

export type FieldVariants = VariantProps<typeof fieldVariants>;
