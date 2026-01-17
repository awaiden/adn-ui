import { tv, type VariantProps } from "tailwind-variants";

export const avatarVariants = tv({
  defaultVariants: {
    size: "md",
  },
  slots: {
    fallback: "avatar__fallback",
    image: "avatar__image",
    root: "avatar",
  },
  variants: {
    size: {
      lg: { root: "avatar--lg" },
      md: { root: "avatar--md" },
      sm: { root: "avatar--sm" },
    },
  },
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;
