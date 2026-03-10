import { tv, type VariantProps } from "tailwind-variants";

export const contextMenuVariants = tv({
	slots: {
		content: "context-menu__content",
		item: "context-menu__item",
		checkboxItem: "context-menu__checkbox-item",
		radioItem: "context-menu__radio-item",
		itemIndicator: "context-menu__item-indicator",
		label: "context-menu__label",
		separator: "context-menu__separator",
		subTrigger: "context-menu__sub-trigger",
		subContent: "context-menu__sub-content",
		shortcut: "context-menu__shortcut",
	},
});

export type ContextMenuVariants = VariantProps<typeof contextMenuVariants>;
