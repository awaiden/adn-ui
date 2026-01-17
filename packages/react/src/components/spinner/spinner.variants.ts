import { tv, type VariantProps } from "tailwind-variants";

export const spinnerVariants = tv({
  base: "spinner",
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
  variants: {
    size: {
      lg: "spinner--lg",
      md: "spinner--md",
      sm: "spinner--sm",
      xl: "spinner--xl",
    },
    variant: {
      danger: "spinner--danger",
      primary: "spinner--primary",
      success: "spinner--success",
    },
  },
});

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;
