import BreadcrumbEllipsis from "./breadcrumb-ellipsis";
import BreadcrumbItem from "./breadcrumb-item";
import BreadcrumbLink from "./breadcrumb-link";
import BreadcrumbList from "./breadcrumb-list";
import BreadcrumbPage from "./breadcrumb-page";
import BreadcrumbRoot from "./breadcrumb-root";
import BreadcrumbSeparator from "./breadcrumb-separator";

export const Breadcrumb = {
	Root: BreadcrumbRoot,
	List: BreadcrumbList,
	Item: BreadcrumbItem,
	Link: BreadcrumbLink,
	Page: BreadcrumbPage,
	Separator: BreadcrumbSeparator,
	Ellipsis: BreadcrumbEllipsis,
};

export {
	BreadcrumbRoot,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
};

export type BreadcrumbRootProps = React.ComponentProps<typeof BreadcrumbRoot>;
export type BreadcrumbListProps = React.ComponentProps<typeof BreadcrumbList>;
export type BreadcrumbItemProps = React.ComponentProps<typeof BreadcrumbItem>;
export type BreadcrumbLinkProps = React.ComponentProps<typeof BreadcrumbLink>;
export type BreadcrumbPageProps = React.ComponentProps<typeof BreadcrumbPage>;
export type BreadcrumbSeparatorProps = React.ComponentProps<
	typeof BreadcrumbSeparator
>;
export type BreadcrumbEllipsisProps = React.ComponentProps<
	typeof BreadcrumbEllipsis
>;

export {
	type BreadcrumbVariants,
	breadcrumbVariants,
} from "./breadcrumb.variants";
