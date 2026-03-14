import { tv, type VariantProps } from "tailwind-variants";

export const tabsVariants = tv({
	defaultVariants: {
		variant: "underline",
	},
	slots: {
		content: "tabs__content",
		list: "tabs__list",
		root: "tabs",
		trigger: "tabs__trigger",
	},
	variants: {
		variant: {
			outline: {
				list: "tabs__list--outline",
				trigger: "tabs__trigger--outline",
			},
			underline: {
				list: "tabs__list--underline",
				trigger: "tabs__trigger--underline",
			},
		},
	},
});

export type TabsVariants = VariantProps<typeof tabsVariants>;
