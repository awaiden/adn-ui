import { tv, type VariantProps } from "tailwind-variants";

export const cardVariants = tv({
	slots: {
		content: "card__content",
		description: "card__description",
		header: "card__header",
		root: "card",
		title: "card__title",
	},
});

export type CardVariants = VariantProps<typeof cardVariants>;
