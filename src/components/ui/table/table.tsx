"use client";

import "./table.css";

import type React from "react";

import { cn } from "tailwind-variants";

import { TableContext, useTableContext } from "./table.context";
import { tableVariants, type TableVariants } from "./table.variants";

export type TableProps = TableVariants & React.HTMLAttributes<HTMLTableElement>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/table/content.md
 */
export const TableRoot = ({ children, className, ...props }: TableProps) => {
  const slots = tableVariants();

  return (
    <TableContext.Provider value={{ slots }}>
      <div className={slots.root()}>
        <table className={cn(slots.table(), className)} {...props}>
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
};

export type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/table/content.md
 */
export const TableHeader = ({ className, ...props }: TableHeaderProps) => {
  const { slots } = useTableContext();
  return <thead className={cn(slots.header(), className)} {...props} />;
};

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/table/content.md
 */
export const TableBody = ({ className, ...props }: TableBodyProps) => {
  const { slots } = useTableContext();
  return <tbody className={cn(slots.body(), className)} {...props} />;
};

export type TableFooterProps = React.HTMLAttributes<HTMLTableSectionElement>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/table/content.md
 */
export const TableFooter = ({ className, ...props }: TableFooterProps) => {
  const { slots } = useTableContext();
  return <tfoot className={cn(slots.footer(), className)} {...props} />;
};

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/table/content.md
 */
export const TableRow = ({ className, ...props }: TableRowProps) => {
  const { slots } = useTableContext();
  return <tr className={cn(slots.row(), className)} {...props} />;
};

export type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/table/content.md
 */
export const TableHead = ({ className, ...props }: TableHeadProps) => {
  const { slots } = useTableContext();
  return <th className={cn(slots.head(), className)} {...props} />;
};

export type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/table/content.md
 */
export const TableCell = ({ className, ...props }: TableCellProps) => {
  const { slots } = useTableContext();
  return <td className={cn(slots.cell(), className)} {...props} />;
};

export type TableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/table/content.md
 */
export const TableCaption = ({ className, ...props }: TableCaptionProps) => {
  const { slots } = useTableContext();
  return <caption className={cn(slots.caption(), className)} {...props} />;
};
