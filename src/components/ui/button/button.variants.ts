/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "button",
  variants: {
    variant: {
      primary: "button--primary",
      secondary: "button--secondary",
      ghost: "button--ghost",
      outline: "button--outline",
      destructive: "button--destructive",
    },
    size: {
      sm: "button--sm",
      md: "button--md",
      lg: "button--lg",
    },
    isIconOnly: {
      true: "button--icon-only",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    isIconOnly: false,
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
