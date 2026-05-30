/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const cardVariants = tv({
  slots: {
    root: "card",
    header: "card__header",
    title: "card__title",
    description: "card__description",
    content: "card__content",
  },
  variants: {
    variant: {
      default: { root: "card--default" },
      outline: { root: "card--outline" },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;
