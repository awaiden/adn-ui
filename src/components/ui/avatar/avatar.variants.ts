/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const avatarVariants = tv({
  slots: {
    root: "avatar",
    image: "avatar__image",
    fallback: "avatar__fallback",
  },
  variants: {
    size: {
      sm: {
        root: "avatar--sm",
      },
      md: {
        root: "avatar--md",
      },
      lg: {
        root: "avatar--lg",
      },
      xl: {
        root: "avatar--xl",
      },
    },
    shape: {
      circle: {
        root: "avatar--circle",
      },
      square: {
        root: "avatar--square",
      },
      rounded: {
        root: "avatar--rounded",
      },
    },
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
  },
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;
