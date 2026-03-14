import { tv, type VariantProps } from "tailwind-variants";

export const switchVariants = tv({
  defaultVariants: {
    size: "md",
  },
  slots: {
    root: "switch",
    thumb: "switch__thumb",
  },
  variants: {
    size: {
      lg: {
        root: "switch--lg",
        thumb: "switch__thumb--lg",
      },
      md: {
        root: "switch--md",
        thumb: "switch__thumb--md",
      },
      sm: {
        root: "switch--sm",
        thumb: "switch__thumb--sm",
      },
    },
  },
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
