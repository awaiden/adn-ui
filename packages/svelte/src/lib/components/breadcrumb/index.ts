import Ellipsis from "./breadcrumb-ellipsis.svelte";
import Item from "./breadcrumb-item.svelte";
import Link from "./breadcrumb-link.svelte";
import List from "./breadcrumb-list.svelte";
import Page from "./breadcrumb-page.svelte";
import Root from "./breadcrumb-root.svelte";
import Separator from "./breadcrumb-separator.svelte";

export const Breadcrumb = {
	Root,
	List,
	Item,
	Link,
	Page,
	Separator,
	Ellipsis,
};

export {
	Root as BreadcrumbRoot,
	List as BreadcrumbList,
	Item as BreadcrumbItem,
	Link as BreadcrumbLink,
	Page as BreadcrumbPage,
	Separator as BreadcrumbSeparator,
	Ellipsis as BreadcrumbEllipsis,
};
