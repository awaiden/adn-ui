/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const fieldsetVariants = tv({
  slots: {
    root: "fieldset",
    legend: "fieldset__legend",
    description: "fieldset__description",
  },
  variants: {
    variant: {
      default: {
        root: "fieldset--default",
      },
      bordered: {
        root: "fieldset--bordered",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type FieldsetVariants = VariantProps<typeof fieldsetVariants>;
