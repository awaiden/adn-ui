import { tv, type VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
	base: "badge",
	variants: {
		variant: {
			primary: "badge--primary",
			secondary: "badge--secondary",
			destructive: "badge--destructive",
			outline: "badge--outline",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

export type BadgeVariants = VariantProps<typeof badgeVariants>;
