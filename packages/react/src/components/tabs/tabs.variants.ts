import { tv, type VariantProps } from "tailwind-variants";

export const tabsVariants = tv({
	slots: {
		root: "tabs",
		list: "tabs__list",
		trigger: "tabs__trigger",
		content: "tabs__content",
	},
	variants: {
		variant: {
			underline: {
				list: "tabs__list--underline",
				trigger: "tabs__trigger--underline",
			},
			outline: {
				list: "tabs__list--outline",
				trigger: "tabs__trigger--outline",
			},
		},
	},
	defaultVariants: {
		variant: "underline",
	},
});

export type TabsVariants = VariantProps<typeof tabsVariants>;
