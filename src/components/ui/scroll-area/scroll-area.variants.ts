/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const scrollAreaVariants = tv({
  slots: {
    root: "scroll-area",
    viewport: "scroll-area__viewport",
    content: "scroll-area__content",
    scrollbar: "scroll-area__scrollbar",
    thumb: "scroll-area__thumb",
    corner: "scroll-area__corner",
  },
  variants: {
    size: {
      sm: {
        scrollbar: "scroll-area__scrollbar--sm",
      },
      md: {
        scrollbar: "scroll-area__scrollbar--md",
      },
      lg: {
        scrollbar: "scroll-area__scrollbar--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type ScrollAreaVariants = VariantProps<typeof scrollAreaVariants>;
