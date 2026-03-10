import { tv, type VariantProps } from "tailwind-variants";

export const cardVariants = tv({
	slots: {
		root: "card",
		header: "card__header",
		title: "card__title",
		description: "card__description",
		content: "card__content",
	},
});

export type CardVariants = VariantProps<typeof cardVariants>;
