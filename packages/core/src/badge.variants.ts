import { tv, type VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
  base: "badge",
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      destructive: "badge--destructive",
      outline: "badge--outline",
      primary: "badge--primary",
      secondary: "badge--secondary",
    },
  },
});

export type BadgeVariants = VariantProps<typeof badgeVariants>;
