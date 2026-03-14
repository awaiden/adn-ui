import { tv, type VariantProps } from "tailwind-variants";

export const toggleVariants = tv({
  base: "toggle",
  defaultVariants: {
    size: "md",
    variant: "default",
  },
  variants: {
    size: {
      lg: "toggle--lg",
      md: "toggle--md",
      sm: "toggle--sm",
    },
    variant: {
      default: "bg-transparent",
      outline: "toggle--outline",
    },
  },
});

export type ToggleVariants = VariantProps<typeof toggleVariants>;
