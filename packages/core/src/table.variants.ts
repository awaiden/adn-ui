import { tv, type VariantProps } from "tailwind-variants";

export const tableVariants = tv({
  slots: {
    body: "table__body",
    caption: "table__caption",
    cell: "table__cell",
    footer: "table__footer",
    head: "table__head",
    header: "table__header",
    root: "table",
    row: "table__row",
  },
});

export type TableVariants = VariantProps<typeof tableVariants>;
