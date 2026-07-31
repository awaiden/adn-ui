/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const progressVariants = tv({
  slots: {
    root: "progress",
    track: "progress__track",
    indicator: "progress__indicator",
    label: "progress__label",
    value: "progress__value",
  },
  variants: {
    size: {
      sm: {
        track: "progress__track--sm",
      },
      md: {
        track: "progress__track--md",
      },
      lg: {
        track: "progress__track--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type ProgressVariants = VariantProps<typeof progressVariants>;
