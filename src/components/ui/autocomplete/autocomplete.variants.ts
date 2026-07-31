/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const autocompleteVariants = tv({
  slots: {
    root: "autocomplete",
    input: "autocomplete__input",
    portal: "autocomplete__portal",
    positioner: "autocomplete__positioner",
    popup: "autocomplete__popup",
    list: "autocomplete__list",
    item: "autocomplete__item",
    empty: "autocomplete__empty",
    status: "autocomplete__status",
    group: "autocomplete__group",
    groupLabel: "autocomplete__group-label",
  },
  variants: {
    variant: {
      default: {
        input: "autocomplete__input--default",
      },
      outline: {
        input: "autocomplete__input--outline",
      },
    },
    size: {
      sm: {
        input: "autocomplete__input--sm",
        item: "autocomplete__item--sm",
      },
      md: {
        input: "autocomplete__input--md",
        item: "autocomplete__item--md",
      },
      lg: {
        input: "autocomplete__input--lg",
        item: "autocomplete__item--lg",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type AutocompleteVariants = VariantProps<typeof autocompleteVariants>;
