/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const previewCardVariants = tv({
  slots: {
    root: "preview-card",
    trigger: "preview-card__trigger",
    positioner: "preview-card__positioner",
    popup: "preview-card__popup",
    arrow: "preview-card__arrow",
    backdrop: "preview-card__backdrop",
  },
  variants: {
    size: {
      sm: {
        popup: "preview-card__popup--sm",
      },
      md: {
        popup: "preview-card__popup--md",
      },
      lg: {
        popup: "preview-card__popup--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type PreviewCardVariants = VariantProps<typeof previewCardVariants>;
