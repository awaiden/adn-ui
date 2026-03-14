import { tv, type VariantProps } from "tailwind-variants";

export const separatorVariants = tv({
	base: "separator",
	variants: {
		orientation: {
			horizontal: "separator--horizontal",
			vertical: "separator--vertical",
		},
	},
	defaultVariants: {
		orientation: "horizontal",
	},
});

export type SeparatorVariants = VariantProps<typeof separatorVariants>;
