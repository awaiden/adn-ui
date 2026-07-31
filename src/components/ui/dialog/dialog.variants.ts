/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const dialogVariants = tv({
  slots: {
    root: "dialog",
    trigger: "dialog__trigger",
    portal: "dialog__portal",
    backdrop: "dialog__backdrop",
    popup: "dialog__popup",
    title: "dialog__title",
    description: "dialog__description",
    close: "dialog__close",
  },
  variants: {
    size: {
      sm: {
        popup: "dialog__popup--sm",
      },
      md: {
        popup: "dialog__popup--md",
      },
      lg: {
        popup: "dialog__popup--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type DialogVariants = VariantProps<typeof dialogVariants>;
