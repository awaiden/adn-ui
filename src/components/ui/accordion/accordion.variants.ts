/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const accordionVariants = tv({
  slots: {
    root: "accordion",
    item: "accordion__item",
    header: "accordion__header",
    trigger: "accordion__trigger group",
    panel: "accordion__panel",
  },
  variants: {
    variant: {
      default: {
        root: "accordion--default",
      },
      outline: {
        root: "accordion--outline",
      },
      ghost: {
        root: "accordion--ghost",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type AccordionVariants = VariantProps<typeof accordionVariants>;
