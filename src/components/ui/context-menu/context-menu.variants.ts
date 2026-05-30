import { tv, type VariantProps } from "tailwind-variants";

export const contextMenuVariants = tv({
  slots: {
    checkbox: "context-menu__checkbox-item",
    content: "context-menu__content",
    indicator: "context-menu__indicator",
    item: "context-menu__item",
    label: "context-menu__label",
    radio: "context-menu__radio-item",
    separator: "context-menu__separator",
    shortcut: "context-menu__shortcut",
    subContent: "context-menu__sub-content",
    subTrigger: "context-menu__sub-trigger",
  },
});

export type ContextMenuVariants = VariantProps<typeof contextMenuVariants>;
