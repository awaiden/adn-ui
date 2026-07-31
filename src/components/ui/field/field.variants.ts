/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const fieldVariants = tv({
  slots: {
    root: "field",
    label: "field__label",
    control: "field__control",
    error: "field__error",
    description: "field__description",
    item: "field__item",
  },
  variants: {
    size: {
      sm: {
        label: "field__label--sm",
        control: "field__control--sm",
      },
      md: {
        label: "field__label--md",
        control: "field__control--md",
      },
      lg: {
        label: "field__label--lg",
        control: "field__control--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type FieldVariants = VariantProps<typeof fieldVariants>;
