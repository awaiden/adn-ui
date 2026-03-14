import { tv, type VariantProps } from "tailwind-variants";

export const textareaVariants = tv({
	base: "textarea",
	variants: {
		size: {
			sm: "textarea--sm",
			md: "textarea--md",
			lg: "textarea--lg",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type TextareaVariants = VariantProps<typeof textareaVariants>;
