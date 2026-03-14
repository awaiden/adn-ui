import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
	base: "button",
	variants: {
		variant: {
			primary: "button--primary",
			secondary: "button--secondary",
			destructive: "button--destructive",
			outline: "button--outline",
			ghost: "button--ghost",
		},
		size: {
			sm: "button--sm",
			md: "button--md",
			lg: "button--lg",
			icon: "button--icon",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
