import { tv, type VariantProps } from "tailwind-variants";

export const aspectRatioVariants = tv({
  base: "aspect-ratio",
  defaultVariants: {},
  variants: {},
});

export type AspectRatioVariants = VariantProps<typeof aspectRatioVariants>;
