/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const paginationVariants = tv({
  slots: {
    root: "pagination",
    content: "pagination__content",
    item: "pagination__item",
    link: "pagination__link",
    ellipsis: "pagination__ellipsis",
  },
  variants: {
    size: {
      sm: {
        link: "pagination__link--sm",
        ellipsis: "h-8 w-8 text-xs",
      },
      md: {
        link: "pagination__link--md",
        ellipsis: "h-9 w-9 text-sm",
      },
      lg: {
        link: "pagination__link--lg",
        ellipsis: "h-10 w-10 text-base",
      },
    },
    isActive: {
      true: {
        link: "pagination__link--active",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type PaginationVariants = VariantProps<typeof paginationVariants>;
