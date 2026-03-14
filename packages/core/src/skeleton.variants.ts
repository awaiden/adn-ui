import { tv, type VariantProps } from "tailwind-variants";

export const skeletonVariants = tv({
	base: "skeleton",
	defaultVariants: {
		variant: "default",
	},
	variants: {
		variant: {
			circular: "skeleton--circular",
			default: "skeleton--default",
		},
	},
});

export type SkeletonVariants = VariantProps<typeof skeletonVariants>;
