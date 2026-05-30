import { tv, type VariantProps } from "tailwind-variants";

export const skeletonVariants = tv({
  base: "skeleton",
});

export type SkeletonVariants = VariantProps<typeof skeletonVariants>;
