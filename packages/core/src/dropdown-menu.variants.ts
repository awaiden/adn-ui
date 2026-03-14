import { tv, type VariantProps } from "tailwind-variants";

export const dropdownMenuVariants = tv({
  slots: {
    arrow: "dropdown-menu__arrow",
    checkboxItem: "dropdown-menu__checkbox-item",
    content: "dropdown-menu__content",
    item: "dropdown-menu__item",
    itemIndicator: "dropdown-menu__item-indicator",
    label: "dropdown-menu__label",
    radioItem: "dropdown-menu__radio-item",
    separator: "dropdown-menu__separator",
    shortcut: "dropdown-menu__shortcut",
    subContent: "dropdown-menu__sub-content",
    subTrigger: "dropdown-menu__sub-trigger",
  },
});

export type DropdownMenuVariants = VariantProps<typeof dropdownMenuVariants>;
