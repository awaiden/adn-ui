/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const aspectRatioVariants = tv({
  slots: {
    root: "aspect-ratio",
  },
  variants: {},
  defaultVariants: {},
});

export type AspectRatioVariants = VariantProps<typeof aspectRatioVariants>;
