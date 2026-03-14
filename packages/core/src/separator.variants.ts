import { tv, type VariantProps } from "tailwind-variants";

export const separatorVariants = tv({
  base: "separator",
  defaultVariants: {
    orientation: "horizontal",
  },
  variants: {
    orientation: {
      horizontal: "separator--horizontal",
      vertical: "separator--vertical",
    },
  },
});

export type SeparatorVariants = VariantProps<typeof separatorVariants>;
