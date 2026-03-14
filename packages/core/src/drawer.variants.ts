import { tv, type VariantProps } from "tailwind-variants";

export const drawerVariants = tv({
	slots: {
		overlay: "drawer__overlay",
		content: "drawer__content",
		header: "drawer__header",
		footer: "drawer__footer",
		title: "drawer__title",
		description: "drawer__description",
		close: "drawer__close",
	},
	variants: {
		side: {
			left: {
				content: "drawer__content--left",
			},
			right: {
				content: "drawer__content--right",
			},
			top: {
				content: "drawer__content--top",
			},
			bottom: {
				content: "drawer__content--bottom",
			},
		},
	},
	defaultVariants: {
		side: "right",
	},
});

export type DrawerVariants = VariantProps<typeof drawerVariants>;
