/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const dropdownMenuVariants = tv({
  slots: {
    root: "dropdown-menu",
    trigger: "dropdown-menu__trigger",
    positioner: "dropdown-menu__positioner",
    popup: "dropdown-menu__popup",
    item: "dropdown-menu__item",
    separator: "dropdown-menu__separator",
    submenuTrigger: "dropdown-menu__submenu-trigger",
    group: "dropdown-menu__group",
    groupLabel: "dropdown-menu__group-label",
    checkboxItem: "dropdown-menu__checkbox-item",
    checkboxItemIndicator: "dropdown-menu__checkbox-item-indicator",
    radioGroup: "dropdown-menu__radio-group",
    radioItem: "dropdown-menu__radio-item",
    radioItemIndicator: "dropdown-menu__radio-item-indicator",
  },
  variants: {
    size: {
      sm: {
        popup: "dropdown-menu__popup--sm",
        item: "dropdown-menu__item--sm",
      },
      md: {
        popup: "dropdown-menu__popup--md",
        item: "dropdown-menu__item--md",
      },
      lg: {
        popup: "dropdown-menu__popup--lg",
        item: "dropdown-menu__item--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type DropdownMenuVariants = VariantProps<typeof dropdownMenuVariants>;
