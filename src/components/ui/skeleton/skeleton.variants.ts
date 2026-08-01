/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const skeletonVariants = tv({
  slots: {
    root: "skeleton",
    text: "skeleton__text",
    avatar: "skeleton__avatar",
    button: "skeleton__button",
    card: "skeleton__card",
  },
  variants: {
    variant: {
      default: {
        root: "skeleton--default",
      },
      secondary: {
        root: "skeleton--secondary",
      },
      primary: {
        root: "skeleton--primary",
      },
    },
    animation: {
      pulse: {
        root: "skeleton--pulse",
      },
      shimmer: {
        root: "skeleton--shimmer",
      },
      none: {
        root: "skeleton--none",
      },
    },
    shape: {
      rounded: {
        root: "skeleton--rounded",
      },
      circle: {
        root: "skeleton--circle",
      },
      square: {
        root: "skeleton--square",
      },
      pill: {
        root: "skeleton--pill",
      },
    },
    size: {
      xs: {
        root: "skeleton--xs",
      },
      sm: {
        root: "skeleton--sm",
      },
      md: {
        root: "skeleton--md",
      },
      lg: {
        root: "skeleton--lg",
      },
      xl: {
        root: "skeleton--xl",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    animation: "pulse",
    shape: "rounded",
    size: "md",
  },
});

export type SkeletonVariants = VariantProps<typeof skeletonVariants>;
