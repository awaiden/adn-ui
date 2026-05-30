/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
  base: "badge",
  variants: {
    variant: {
      default: "badge--default",
      secondary: "badge--secondary",
      destructive: "badge--destructive",
      outline: "badge--outline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BadgeVariants = VariantProps<typeof badgeVariants>;
