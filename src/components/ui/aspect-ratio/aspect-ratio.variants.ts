import { tv, type VariantProps } from "tailwind-variants";

export const aspectRatioVariants = tv({
  slots: {
    root: "aspect-ratio",
  },
});

export type AspectRatioVariants = VariantProps<typeof aspectRatioVariants>;
