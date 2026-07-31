/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const checkboxGroupVariants = tv({
  slots: {
    root: "checkbox-group",
  },
  variants: {
    orientation: {
      vertical: {
        root: "checkbox-group--vertical",
      },
      horizontal: {
        root: "checkbox-group--horizontal",
      },
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

export type CheckboxGroupVariants = VariantProps<typeof checkboxGroupVariants>;
