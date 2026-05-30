import { tv, type VariantProps } from "tailwind-variants";

export const menubarVariants = tv({
  slots: {
    checkbox: "menubar__checkbox-item",
    content: "menubar__content",
    indicator: "menubar__indicator",
    item: "menubar__item",
    label: "menubar__label",
    radio: "menubar__radio-item",
    root: "menubar",
    separator: "menubar__separator",
    shortcut: "menubar__shortcut",
    subContent: "menubar__sub-content",
    subTrigger: "menubar__sub-trigger",
    trigger: "menubar__trigger",
  },
});

export type MenubarVariants = VariantProps<typeof menubarVariants>;
