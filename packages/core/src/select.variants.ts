import { tv, type VariantProps } from "tailwind-variants";

export const selectVariants = tv({
	slots: {
		trigger: "select__trigger",
		icon: "select__icon",
		content: "select__content",
		viewport: "select__viewport",
		item: "select__item",
		itemIndicator: "select__item-indicator",
		label: "select__label",
		separator: "select__separator",
		scrollButton: "select__scroll-button",
	},
});

export type SelectVariants = VariantProps<typeof selectVariants>;
