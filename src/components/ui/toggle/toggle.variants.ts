/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const toggleVariants = tv({
  slots: {
    root: "toggle",
  },
  variants: {
    variant: {
      default: { root: "toggle--default" },
      outline: { root: "toggle--outline" },
    },
    size: {
      sm: { root: "toggle--sm" },
      md: { root: "toggle--md" },
      lg: { root: "toggle--lg" },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type ToggleVariants = VariantProps<typeof toggleVariants>;
