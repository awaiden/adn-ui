import { tv, type VariantProps } from "tailwind-variants";

export const dialogVariants = tv({
	slots: {
		overlay: "dialog__overlay",
		content: "dialog__content",
		header: "dialog__header",
		footer: "dialog__footer",
		title: "dialog__title",
		description: "dialog__description",
		close: "dialog__close",
	},
});

export type DialogVariants = VariantProps<typeof dialogVariants>;
