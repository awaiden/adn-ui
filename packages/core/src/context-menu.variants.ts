import { tv, type VariantProps } from "tailwind-variants";

export const contextMenuVariants = tv({
  slots: {
    checkboxItem: "context-menu__checkbox-item",
    content: "context-menu__content",
    item: "context-menu__item",
    itemIndicator: "context-menu__item-indicator",
    label: "context-menu__label",
    radioItem: "context-menu__radio-item",
    separator: "context-menu__separator",
    shortcut: "context-menu__shortcut",
    subContent: "context-menu__sub-content",
    subTrigger: "context-menu__sub-trigger",
  },
});

export type ContextMenuVariants = VariantProps<typeof contextMenuVariants>;
