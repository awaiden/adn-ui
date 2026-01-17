import { tv, type VariantProps } from "tailwind-variants";

export const chipVariants = tv({
  base: "chip",
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
  variants: {
    size: {
      lg: "chip--lg",
      md: "chip--md",
      sm: "chip--sm",
    },
    variant: {
      danger: "chip--danger",
      outline: "chip--outline",
      primary: "chip--primary",
      secondary: "chip--secondary",
      success: "chip--success",
    },
  },
});

export type ChipVariants = VariantProps<typeof chipVariants>;
