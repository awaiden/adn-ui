import { tv, type VariantProps } from "tailwind-variants";

export const accordionVariants = tv({
	slots: {
		root: "accordion",
		item: "accordion__item",
		header: "accordion__header",
		trigger: "accordion__trigger",
		content: "accordion__content",
		chevron: "accordion__chevron",
	},
});

export type AccordionVariants = VariantProps<typeof accordionVariants>;
