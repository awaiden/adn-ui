"use client";

import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { TableContext } from "./table.context";
import { type TableVariants, tableVariants } from "./table.variants";
import { useTable } from "./use-table";

// Root
export interface TableProps extends TableVariants, React.ComponentProps<"table"> {}

export const TableRoot = ({ className, ...props }: TableProps) => {
  const slots = useMemo(() => tableVariants(), []);

  return (
    <TableContext value={{ slots }}>
      <table className={cn(className, slots.root())} {...props} />
    </TableContext>
  );
};

// thead
export interface TableHeadProps extends React.ComponentProps<"thead"> {}

export const TableHead = ({ className, ...props }: TableHeadProps) => {
  const { slots } = useTable();
  return <thead className={cn(className, slots.thead())} {...props} />;
};

// tr
export interface TableRowProps extends React.ComponentProps<"tr"> {}

export const TableRow = ({ className, ...props }: TableRowProps) => {
  const { slots } = useTable();
  return <tr className={cn(className, slots.tr())} {...props} />;
};

// th
export interface TableHeaderCellProps extends React.ComponentProps<"th"> {}

export const TableHeaderCell = ({ className, ...props }: TableHeaderCellProps) => {
  const { slots } = useTable();
  return <th className={cn(className, slots.th())} {...props} />;
};

// tbody
export interface TableBodyProps extends React.ComponentProps<"tbody"> {}

export const TableBody = ({ className, ...props }: TableBodyProps) => {
  const { slots } = useTable();
  return <tbody className={cn(className, slots.tbody())} {...props} />;
};

// td
export interface TableDataCellProps extends React.ComponentProps<"td"> {}

export const TableDataCell = ({ className, ...props }: TableDataCellProps) => {
  const { slots } = useTable();
  return <td className={cn(className, slots.td())} {...props} />;
};

// tfoot
export interface TableFooterProps extends React.ComponentProps<"tfoot"> {}

export const TableFooter = ({ className, ...props }: TableFooterProps) => {
  const { slots } = useTable();
  return <tfoot className={cn(className, slots.tfoot())} {...props} />;
};

// Exports
