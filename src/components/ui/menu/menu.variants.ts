/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const menuVariants = tv({
  slots: {
    root: "menu",
    trigger: "menu__trigger",
    positioner: "menu__positioner",
    popup: "menu__popup",
    item: "menu__item",
    separator: "menu__separator",
    submenuTrigger: "menu__submenu-trigger",
    group: "menu__group",
    groupLabel: "menu__group-label",
    checkboxItem: "menu__checkbox-item",
    checkboxItemIndicator: "menu__checkbox-item-indicator",
    radioGroup: "menu__radio-group",
    radioItem: "menu__radio-item",
    radioItemIndicator: "menu__radio-item-indicator",
  },
  variants: {
    size: {
      sm: {
        popup: "menu__popup--sm",
        item: "menu__item--sm",
      },
      md: {
        popup: "menu__popup--md",
        item: "menu__item--md",
      },
      lg: {
        popup: "menu__popup--lg",
        item: "menu__item--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type MenuVariants = VariantProps<typeof menuVariants>;
