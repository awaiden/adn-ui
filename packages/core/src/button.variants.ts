import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
	base: "button",
	defaultVariants: {
		size: "md",
		variant: "primary",
	},
	variants: {
		size: {
			icon: "button--icon",
			lg: "button--lg",
			md: "button--md",
			sm: "button--sm",
		},
		variant: {
			destructive: "button--destructive",
			ghost: "button--ghost",
			outline: "button--outline",
			primary: "button--primary",
			secondary: "button--secondary",
		},
	},
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
