import { tv, type VariantProps } from "tailwind-variants";

export const linkVariants = tv({
  base: "link",
  defaultVariants: {
    variant: "no-underline",
  },
  variants: {
    variant: {
      "no-underline": "link--no-underline",
      underline: "link--underline",
    },
  },
});

export type LinkVariants = VariantProps<typeof linkVariants>;
