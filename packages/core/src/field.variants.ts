import { tv, type VariantProps } from "tailwind-variants";

export const fieldVariants = tv({
	slots: {
		root: "field",
		label: "field__label",
		description: "field__description",
		error: "field__error",
	},
	variants: {
		orientation: {
			vertical: {
				root: "field--vertical",
			},
			horizontal: {
				root: "field--horizontal",
			},
		},
	},
	defaultVariants: {
		orientation: "vertical",
	},
});

export type FieldVariants = VariantProps<typeof fieldVariants>;
