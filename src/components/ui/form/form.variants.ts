/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const formVariants = tv({
  slots: {
    root: "form",
  },
  variants: {
    layout: {
      vertical: {
        root: "form--vertical",
      },
      horizontal: {
        root: "form--horizontal",
      },
    },
  },
  defaultVariants: {
    layout: "vertical",
  },
});

export type FormVariants = VariantProps<typeof formVariants>;
