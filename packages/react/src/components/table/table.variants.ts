import { tv, type VariantProps } from "tailwind-variants";

export const tableVariants = tv({
  slots: {
    root: "table",
    tbody: "table__tbody",
    td: "table__td",
    tfoot: "table__tfoot",
    th: "table__th",
    thead: "table__thead",
    tr: "table__tr",
  },
});

export type TableVariants = VariantProps<typeof tableVariants>;
