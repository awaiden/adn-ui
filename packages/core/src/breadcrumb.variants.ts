import { tv, type VariantProps } from "tailwind-variants";

export const breadcrumbVariants = tv({
	slots: {
		ellipsis: "breadcrumb__ellipsis",
		item: "breadcrumb__item",
		link: "breadcrumb__link",
		list: "breadcrumb__list",
		page: "breadcrumb__page",
		root: "breadcrumb",
		separator: "breadcrumb__separator",
	},
});

export type BreadcrumbVariants = VariantProps<typeof breadcrumbVariants>;
