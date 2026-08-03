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
    group: "field__group",
    prefix: "field__prefix",
    suffix: "field__suffix",
  },
  variants: {
    size: {
      sm: {
        label: "field__label--sm",
        control: "field__control--sm",
        group: "field__group--sm",
        prefix: "field__prefix--sm",
        suffix: "field__suffix--sm",
      },
      md: {
        label: "field__label--md",
        control: "field__control--md",
        group: "field__group--md",
        prefix: "field__prefix--md",
        suffix: "field__suffix--md",
      },
      lg: {
        label: "field__label--lg",
        control: "field__control--lg",
        group: "field__group--lg",
        prefix: "field__prefix--lg",
        suffix: "field__suffix--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type FieldVariants = VariantProps<typeof fieldVariants>;


