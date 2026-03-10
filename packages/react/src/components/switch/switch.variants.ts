import { tv, type VariantProps } from "tailwind-variants";

export const switchVariants = tv({
	slots: {
		root: "switch",
		thumb: "switch__thumb",
	},
	variants: {
		size: {
			sm: {
				root: "switch--sm",
				thumb: "switch__thumb--sm",
			},
			md: {
				root: "switch--md",
				thumb: "switch__thumb--md",
			},
			lg: {
				root: "switch--lg",
				thumb: "switch__thumb--lg",
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
