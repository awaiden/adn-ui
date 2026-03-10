import { tv, type VariantProps } from "tailwind-variants";

export const skeletonVariants = tv({
	base: "skeleton",
	variants: {
		variant: {
			default: "skeleton--default",
			circular: "skeleton--circular",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export type SkeletonVariants = VariantProps<typeof skeletonVariants>;
