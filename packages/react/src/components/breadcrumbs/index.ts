import {
  BreadcrumbsRoot,
  BreadcrumbsList,
  BreadcrumbsItem,
  BreadcrumbsSeparator,
} from "./breadcrumbs";

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
  List: BreadcrumbsList,
  Item: BreadcrumbsItem,
  Separator: BreadcrumbsSeparator,
});

// Named Exports
export * from "./breadcrumbs";

// Variants
export type { BreadcrumbsVariants } from "./breadcrumbs.variants";
export { breadcrumbsVariants } from "./breadcrumbs.variants";
