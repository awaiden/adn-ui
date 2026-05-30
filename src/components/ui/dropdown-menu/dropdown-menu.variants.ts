import { tv, type VariantProps } from "tailwind-variants";

export const dropdownMenuVariants = tv({
  slots: {
    checkbox: "dropdown-menu__checkbox-item",
    content: "dropdown-menu__content",
    indicator: "dropdown-menu__indicator",
    item: "dropdown-menu__item",
    label: "dropdown-menu__label",
    radio: "dropdown-menu__radio-item",
    separator: "dropdown-menu__separator",
    shortcut: "dropdown-menu__shortcut",
    subContent: "dropdown-menu__sub-content",
    subTrigger: "dropdown-menu__sub-trigger",
  },
});

export type DropdownMenuVariants = VariantProps<typeof dropdownMenuVariants>;
