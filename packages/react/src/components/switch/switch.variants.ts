import { tv, type VariantProps } from "tailwind-variants";

export const switchVariants = tv({
  slots: {
    root: "switch",
    thumb: "switch__thumb",
  },
  variants: {
    size: {
      lg: { root: "switch--lg" },
      md: { root: "switch--md" },
      sm: { root: "switch--sm" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
