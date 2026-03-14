import { tv, type VariantProps } from "tailwind-variants";

export const tableVariants = tv({
	slots: {
		root: "table",
		header: "table__header",
		body: "table__body",
		footer: "table__footer",
		row: "table__row",
		head: "table__head",
		cell: "table__cell",
		caption: "table__caption",
	},
});

export type TableVariants = VariantProps<typeof tableVariants>;
