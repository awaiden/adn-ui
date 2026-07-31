/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const radioVariants = tv({
  slots: {
    group: "radio-group",
    root: "radio",
    indicator: "radio__indicator",
  },
  variants: {
    size: {
      sm: {
        root: "radio--sm",
        indicator: "radio__indicator--sm",
      },
      md: {
        root: "radio--md",
        indicator: "radio__indicator--md",
      },
      lg: {
        root: "radio--lg",
        indicator: "radio__indicator--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type RadioVariants = VariantProps<typeof radioVariants>;
