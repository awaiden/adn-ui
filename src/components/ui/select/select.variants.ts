/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const selectVariants = tv({
  slots: {
    root: "select",
    label: "select__label",
    trigger: "select__trigger",
    value: "select__value",
    icon: "select__icon",
    positioner: "select__positioner",
    popup: "select__popup",
    list: "select__list",
    item: "select__item",
    itemText: "select__item-text",
    itemIndicator: "select__item-indicator",
    scrollUpArrow: "select__scroll-arrow",
    scrollDownArrow: "select__scroll-arrow",
    group: "select__group",
    groupLabel: "select__group-label",
    separator: "select__separator",
    arrow: "select__arrow",
    backdrop: "select__backdrop",
  },
  variants: {
    size: {
      sm: {
        trigger: "select__trigger--sm",
        item: "select__item--sm",
      },
      md: {
        trigger: "select__trigger--md",
        item: "select__item--md",
      },
      lg: {
        trigger: "select__trigger--lg",
        item: "select__item--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type SelectVariants = VariantProps<typeof selectVariants>;
