import { tv, type VariantProps } from "tailwind-variants";

export const textareaVariants = tv({
	base: "textarea",
	defaultVariants: {
		size: "md",
	},
	variants: {
		size: {
			lg: "textarea--lg",
			md: "textarea--md",
			sm: "textarea--sm",
		},
	},
});

export type TextareaVariants = VariantProps<typeof textareaVariants>;
