import { tv, type VariantProps } from "tailwind-variants";

export const checkboxVariants = tv({
	slots: {
		root: "checkbox",
		indicator: "checkbox__indicator",
	},
	variants: {
		size: {
			sm: {
				root: "checkbox--sm",
			},
			md: {
				root: "checkbox--md",
			},
			lg: {
				root: "checkbox--lg",
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
