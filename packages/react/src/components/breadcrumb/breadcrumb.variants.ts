import { tv, type VariantProps } from "tailwind-variants";

export const breadcrumbVariants = tv({
	slots: {
		root: "breadcrumb",
		list: "breadcrumb__list",
		item: "breadcrumb__item",
		link: "breadcrumb__link",
		page: "breadcrumb__page",
		separator: "breadcrumb__separator",
		ellipsis: "breadcrumb__ellipsis",
	},
});

export type BreadcrumbVariants = VariantProps<typeof breadcrumbVariants>;
