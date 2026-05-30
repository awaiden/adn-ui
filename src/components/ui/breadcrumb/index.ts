import { BreadcrumbEllipsis } from "./breadcrumb-ellipsis";
import { BreadcrumbItem } from "./breadcrumb-item";
import { BreadcrumbLink } from "./breadcrumb-link";
import { BreadcrumbList } from "./breadcrumb-list";
import { BreadcrumbPage } from "./breadcrumb-page";
import { BreadcrumbRoot } from "./breadcrumb-root";
import { BreadcrumbSeparator } from "./breadcrumb-separator";

export const Breadcrumb = {
  Ellipsis: BreadcrumbEllipsis,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  List: BreadcrumbList,
  Page: BreadcrumbPage,
  Root: BreadcrumbRoot,
  Separator: BreadcrumbSeparator,
};

export {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbRoot,
  BreadcrumbSeparator,
};

export { BreadcrumbContext, useBreadcrumbContext } from "./breadcrumb.context";

export { type BreadcrumbVariants, breadcrumbVariants } from "./breadcrumb.variants";
