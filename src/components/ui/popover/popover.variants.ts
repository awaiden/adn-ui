/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const popoverVariants = tv({
  slots: {
    root: "popover",
    trigger: "popover__trigger",
    positioner: "popover__positioner",
    popup: "popover__popup",
    arrow: "popover__arrow",
    title: "popover__title",
    description: "popover__description",
    close: "popover__close",
    backdrop: "popover__backdrop",
  },
  variants: {
    size: {
      sm: {
        popup: "popover__popup--sm",
      },
      md: {
        popup: "popover__popup--md",
      },
      lg: {
        popup: "popover__popup--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type PopoverVariants = VariantProps<typeof popoverVariants>;
