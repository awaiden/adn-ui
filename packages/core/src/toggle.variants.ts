import { tv, type VariantProps } from "tailwind-variants";

export const toggleVariants = tv({
	base: "toggle",
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "toggle--outline",
		},
		size: {
			sm: "toggle--sm",
			md: "toggle--md",
			lg: "toggle--lg",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});

export type ToggleVariants = VariantProps<typeof toggleVariants>;
