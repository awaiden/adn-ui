/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const labelVariants = tv({
  slots: {
    root: "label",
  },
  variants: {
    size: {
      sm: {
        root: "label--sm",
      },
      md: {
        root: "label--md",
      },
      lg: {
        root: "label--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type LabelVariants = VariantProps<typeof labelVariants>;
