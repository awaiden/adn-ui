import {
  TableBody,
  TableDataCell,
  TableFooter,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "./table";

export const Table = Object.assign(TableRoot, {
  Body: TableBody,
  DataCell: TableDataCell,
  Footer: TableFooter,
  Head: TableHead,
  HeaderCell: TableHeaderCell,
  Root: TableRoot,
  Row: TableRow,
});

export * from "./table";

export type { TableVariants } from "./table.variants";
export { tableVariants } from "./table.variants";
