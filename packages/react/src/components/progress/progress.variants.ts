import { tv, type VariantProps } from "tailwind-variants";

export const progressVariants = tv({
	slots: {
		root: "progress",
		indicator: "progress__indicator",
	},
	variants: {
		size: {
			sm: {
				root: "progress--sm",
			},
			md: {
				root: "progress--md",
			},
			lg: {
				root: "progress--lg",
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type ProgressVariants = VariantProps<typeof progressVariants>;
