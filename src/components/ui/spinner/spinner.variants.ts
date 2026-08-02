/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const spinnerVariants = tv({
  slots: {
    root: "spinner",
  },
  variants: {
    size: {
      sm: { root: "spinner--sm" },
      md: { root: "spinner--md" },
      lg: { root: "spinner--lg" },
      xl: { root: "spinner--xl" },
    },
    variant: {
      default: { root: "" },
      muted: { root: "spinner--muted" },
      primary: { root: "spinner--primary" },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;
