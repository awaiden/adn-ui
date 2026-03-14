import { tv, type VariantProps } from "tailwind-variants";

export const labelVariants = tv({
	base: "label",
	variants: {
		size: {
			sm: "label--sm",
			md: "label--md",
			lg: "label--lg",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type LabelVariants = VariantProps<typeof labelVariants>;
