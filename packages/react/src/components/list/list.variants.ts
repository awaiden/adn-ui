import { tv, type VariantProps } from "tailwind-variants";

export const listVariants = tv({
  slots: {
    item: "list__item",
    root: "list",
  },
});

export type ListVariants = VariantProps<typeof listVariants>;
