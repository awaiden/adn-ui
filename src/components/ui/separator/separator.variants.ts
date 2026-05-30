import { tv, type VariantProps } from "tailwind-variants";

export const separatorVariants = tv({
  slots: {
    root: "separator",
  },
});

export type SeparatorVariants = VariantProps<typeof separatorVariants>;
