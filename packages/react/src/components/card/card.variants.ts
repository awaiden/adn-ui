import { tv, type VariantProps } from "tailwind-variants";

export const cardVariants = tv({
  defaultVariants: {
    variant: "default",
  },
  slots: {
    content: "card__content",
    description: "card__description",
    header: "card__header",
    root: "card",
    title: "card__title",
  },
  variants: {
    variant: {
      default: {
        root: "card--default",
      },
      transparent: {
        root: "card--transparent",
      },
    },
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;
