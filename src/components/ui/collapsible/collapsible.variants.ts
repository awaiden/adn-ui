/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const collapsibleVariants = tv({
  slots: {
    root: "collapsible",
    trigger: "collapsible__trigger group",
    panel: "collapsible__panel",
  },
  variants: {
    variant: {
      default: {
        root: "collapsible--default",
      },
      outline: {
        root: "collapsible--outline",
      },
      ghost: {
        root: "collapsible--ghost",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type CollapsibleVariants = VariantProps<typeof collapsibleVariants>;
