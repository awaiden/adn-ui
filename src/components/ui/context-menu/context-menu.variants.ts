/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const contextMenuVariants = tv({
  slots: {
    root: "context-menu",
    trigger: "context-menu__trigger",
    positioner: "context-menu__positioner",
    popup: "context-menu__popup",
    item: "context-menu__item",
    separator: "context-menu__separator",
    submenuTrigger: "context-menu__submenu-trigger",
    group: "context-menu__group",
    groupLabel: "context-menu__group-label",
    checkboxItem: "context-menu__checkbox-item",
    checkboxItemIndicator: "context-menu__checkbox-item-indicator",
    radioGroup: "context-menu__radio-group",
    radioItem: "context-menu__radio-item",
    radioItemIndicator: "context-menu__radio-item-indicator",
  },
  variants: {
    size: {
      sm: {
        popup: "context-menu__popup--sm",
        item: "context-menu__item--sm",
      },
      md: {
        popup: "context-menu__popup--md",
        item: "context-menu__item--md",
      },
      lg: {
        popup: "context-menu__popup--lg",
        item: "context-menu__item--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type ContextMenuVariants = VariantProps<typeof contextMenuVariants>;
