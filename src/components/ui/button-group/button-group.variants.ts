/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const buttonGroupVariants = tv({
  slots: {
    root: "button-group",
  },
  variants: {
    orientation: {
      horizontal: {
        root: "button-group--horizontal",
      },
      vertical: {
        root: "button-group--vertical",
      },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>;
