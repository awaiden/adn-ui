import { tv, type VariantProps } from "tailwind-variants";

export const switchVariants = tv({
  slots: {
    root: "switch",
    thumb: "switch__thumb",
  },
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
