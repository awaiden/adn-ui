/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const inputVariants = tv({
  slots: {
    root: "input",
  },
  variants: {
    size: {
      sm: {
        root: "input--sm",
      },
      md: {
        root: "input--md",
      },
      lg: {
        root: "input--lg",
      },
    },
    variant: {
      default: {
        root: "input--default",
      },
      outline: {
        root: "input--outline",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export type InputVariants = VariantProps<typeof inputVariants>;
