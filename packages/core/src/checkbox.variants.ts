import { tv, type VariantProps } from "tailwind-variants";

export const checkboxVariants = tv({
	defaultVariants: {
		size: "md",
	},
	slots: {
		indicator: "checkbox__indicator",
		root: "checkbox",
	},
	variants: {
		size: {
			lg: {
				root: "checkbox--lg",
			},
			md: {
				root: "checkbox--md",
			},
			sm: {
				root: "checkbox--sm",
			},
		},
	},
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
