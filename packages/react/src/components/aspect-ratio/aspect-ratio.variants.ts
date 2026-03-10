import { tv, type VariantProps } from "tailwind-variants";

export const aspectRatioVariants = tv({
	base: "aspect-ratio",
	variants: {},
	defaultVariants: {},
});

export type AspectRatioVariants = VariantProps<typeof aspectRatioVariants>;
