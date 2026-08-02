import {
  DataTable,
  DataTableColumnHeader,
  DataTablePagination,
  DataTableRoot,
  DataTableSearch,
  DataTableToolbar,
} from "./data-table";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/data-table/content.md
 */
export const DataTableComponent = {
  ColumnHeader: DataTableColumnHeader,
  Pagination: DataTablePagination,
  Root: DataTableRoot,
  Search: DataTableSearch,
  Toolbar: DataTableToolbar,
};

export {
  DataTable,
  DataTableColumnHeader,
  DataTablePagination,
  DataTableRoot,
  DataTableSearch,
  DataTableToolbar,
};

export type {
  ColumnDef,
  DataTableColumnHeaderProps,
  DataTablePaginationProps,
  DataTableProps,
  DataTableRootProps,
  DataTableSearchProps,
  DataTableToolbarProps,
} from "./data-table";

export { DataTableContext, useDataTableContext } from "./data-table.context";
export { type DataTableVariants, dataTableVariants } from "./data-table.variants";
