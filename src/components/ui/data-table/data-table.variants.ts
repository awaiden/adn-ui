/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const dataTableVariants = tv({
  slots: {
    root: "data-table",
    toolbar: "data-table__toolbar",
    search: "data-table__search",
    container: "data-table__container",
    pagination: "data-table__pagination",
    paginationInfo: "data-table__pagination-info",
    paginationControls: "data-table__pagination-controls",
    pageButton: "data-table__page-button",
    columnHeader: "data-table__column-header",
  },
  variants: {
    size: {
      sm: {
        root: "data-table--sm",
        search: "px-2.5 py-1 text-xs",
      },
      md: {
        root: "data-table--md",
      },
      lg: {
        root: "data-table--lg",
        search: "px-3.5 py-2 text-base",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type DataTableVariants = VariantProps<typeof dataTableVariants>;
