/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const toggleGroupVariants = tv({
  slots: {
    root: "toggle-group",
  },
  variants: {
    orientation: {
      horizontal: {
        root: "flex-row",
      },
      vertical: {
        root: "flex-col",
      },
    },
    variant: {
      default: {
        root: "bg-muted p-1 rounded-lg gap-1",
      },
      outline: {
        root: "border border-input rounded-md p-1 gap-1",
      },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "default",
  },
});

export type ToggleGroupVariants = VariantProps<typeof toggleGroupVariants>;
