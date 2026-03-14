import { tv, type VariantProps } from "tailwind-variants";

export const fieldVariants = tv({
	defaultVariants: {
		orientation: "vertical",
	},
	slots: {
		description: "field__description",
		error: "field__error",
		label: "field__label",
		root: "field",
	},
	variants: {
		orientation: {
			horizontal: {
				root: "field--horizontal",
			},
			vertical: {
				root: "field--vertical",
			},
		},
	},
});

export type FieldVariants = VariantProps<typeof fieldVariants>;
