import { tv, type VariantProps } from "tailwind-variants";

export const toggleGroupVariants = tv({
  slots: {
    item: "toggle-group__item",
    root: "toggle-group",
  },
});

export type ToggleGroupVariants = VariantProps<typeof toggleGroupVariants>;
