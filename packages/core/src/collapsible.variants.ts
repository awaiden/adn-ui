import { tv, type VariantProps } from "tailwind-variants";

export const collapsibleVariants = tv({
	slots: {
		content: "collapsible__content",
		root: "collapsible",
		trigger: "collapsible__trigger",
	},
});

export type CollapsibleVariants = VariantProps<typeof collapsibleVariants>;
