import { tv, type VariantProps } from "tailwind-variants";

export const surfaceVariants = tv({
  base: "surface",
});

export type SurfaceVariants = VariantProps<typeof surfaceVariants>;
