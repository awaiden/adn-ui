/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const separatorVariants = tv({
  slots: {
    root: "separator",
  },
  variants: {
    orientation: {
      horizontal: {
        root: "separator--horizontal",
      },
      vertical: {
        root: "separator--vertical",
      },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export type SeparatorVariants = VariantProps<typeof separatorVariants>;
