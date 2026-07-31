/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const checkboxVariants = tv({
  slots: {
    root: "checkbox",
    indicator: "checkbox__indicator",
  },
  variants: {
    size: {
      sm: {
        root: "checkbox--sm",
        indicator: "checkbox__indicator--sm",
      },
      md: {
        root: "checkbox--md",
        indicator: "checkbox__indicator--md",
      },
      lg: {
        root: "checkbox--lg",
        indicator: "checkbox__indicator--lg",
      },
    },
    variant: {
      default: {
        root: "checkbox--default",
      },
      outline: {
        root: "checkbox--outline",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
