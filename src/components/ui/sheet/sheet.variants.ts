/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const sheetVariants = tv({
  slots: {
    overlay: "sheet__overlay",
    content: "sheet__content",
    header: "sheet__header",
    footer: "sheet__footer",
    title: "sheet__title",
    description: "sheet__description",
    close: "sheet__close",
  },
  variants: {
    side: {
      top: { content: "sheet__content--top" },
      bottom: { content: "sheet__content--bottom" },
      left: { content: "sheet__content--left" },
      right: { content: "sheet__content--right" },
    },
  },
  defaultVariants: {
    side: "right",
  },
});

export type SheetVariants = VariantProps<typeof sheetVariants>;
