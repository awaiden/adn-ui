import { tv, type VariantProps } from "tailwind-variants";

export const dropdownMenuVariants = tv({
	slots: {
		content: "dropdown-menu__content",
		item: "dropdown-menu__item",
		checkboxItem: "dropdown-menu__checkbox-item",
		radioItem: "dropdown-menu__radio-item",
		itemIndicator: "dropdown-menu__item-indicator",
		label: "dropdown-menu__label",
		separator: "dropdown-menu__separator",
		subTrigger: "dropdown-menu__sub-trigger",
		subContent: "dropdown-menu__sub-content",
		shortcut: "dropdown-menu__shortcut",
		arrow: "dropdown-menu__arrow",
	},
});

export type DropdownMenuVariants = VariantProps<typeof dropdownMenuVariants>;
