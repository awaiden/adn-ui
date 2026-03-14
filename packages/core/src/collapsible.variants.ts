import { tv, type VariantProps } from "tailwind-variants";

export const collapsibleVariants = tv({
	slots: {
		root: "collapsible",
		trigger: "collapsible__trigger",
		content: "collapsible__content",
	},
});

export type CollapsibleVariants = VariantProps<typeof collapsibleVariants>;
