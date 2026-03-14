import TableBody from "./table-body";
import TableCaption from "./table-caption";
import TableCell from "./table-cell";
import TableFooter from "./table-footer";
import TableHead from "./table-head";
import TableHeader from "./table-header";
import TableRoot from "./table-root";
import TableRow from "./table-row";

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
  TableRoot,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
};

export type TableRootProps = React.ComponentProps<typeof TableRoot>;
export type TableHeaderProps = React.ComponentProps<typeof TableHeader>;
export type TableBodyProps = React.ComponentProps<typeof TableBody>;
export type TableFooterProps = React.ComponentProps<typeof TableFooter>;
export type TableRowProps = React.ComponentProps<typeof TableRow>;
export type TableHeadProps = React.ComponentProps<typeof TableHead>;
export type TableCellProps = React.ComponentProps<typeof TableCell>;
export type TableCaptionProps = React.ComponentProps<typeof TableCaption>;

export { type TableVariants, tableVariants } from "@adn-ui/core";
