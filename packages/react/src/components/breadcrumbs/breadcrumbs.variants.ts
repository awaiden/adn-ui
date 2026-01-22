import { tv, type VariantProps } from "tailwind-variants";

export const breadcrumbsVariants = tv({
  slots: {
    root: "breadcrumbs",
    item: "breadcrumbs__item",
    list: "breadcrumbs__list",
    separator: "breadcrumbs__separator",
  },
});

export type BreadcrumbsVariants = VariantProps<typeof breadcrumbsVariants>;
