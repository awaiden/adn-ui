import { tv, type VariantProps } from "tailwind-variants";

export const rootVariants = tv({
  base: "field",
});

export type RootVariants = VariantProps<typeof rootVariants>;
