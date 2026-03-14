import { tv, type VariantProps } from "tailwind-variants";

export const selectVariants = tv({
	slots: {
		content: "select__content",
		icon: "select__icon",
		item: "select__item",
		itemIndicator: "select__item-indicator",
		label: "select__label",
		scrollButton: "select__scroll-button",
		separator: "select__separator",
		trigger: "select__trigger",
		viewport: "select__viewport",
	},
});

export type SelectVariants = VariantProps<typeof selectVariants>;
