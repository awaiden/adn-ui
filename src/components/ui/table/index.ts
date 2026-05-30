import { TableBody } from "./table-body";
import { TableCaption } from "./table-caption";
import { TableCell } from "./table-cell";
import { TableFooter } from "./table-footer";
import { TableHead } from "./table-head";
import { TableHeader } from "./table-header";
import { TableRoot } from "./table-root";
import { TableRow } from "./table-row";

export const Table = {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Root: TableRoot,
  Row: TableRow,
};

export {
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
};

export { TableContext, useTableContext } from "./table.context";

export { type TableVariants, tableVariants } from "./table.variants";
