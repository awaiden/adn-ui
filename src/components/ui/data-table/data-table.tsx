"use client";

import "./data-table.css";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";
import React, { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

import { Checkbox } from "../checkbox";
import { TableBody, TableCell, TableHead, TableHeader, TableRoot, TableRow } from "../table";
import { DataTableContext, useDataTableContext } from "./data-table.context";
import { dataTableVariants, type DataTableVariants } from "./data-table.variants";

export type ColumnDef<T> = {
  id: string;
  header: React.ReactNode | ((props: { column: ColumnDef<T> }) => React.ReactNode);
  cell: (props: { row: T; index: number }) => React.ReactNode;
  sortable?: boolean;
  accessorKey?: keyof T;
};

export type DataTableRootProps = DataTableVariants & React.HTMLAttributes<HTMLDivElement>;

export const DataTableRoot = ({ children, className, size, ...props }: DataTableRootProps) => {
  const slots = dataTableVariants({ size });

  return (
    <DataTableContext.Provider value={{ slots }}>
      <div className={cn(slots.root(), className)} {...props}>
        {children}
      </div>
    </DataTableContext.Provider>
  );
};

export type DataTableToolbarProps = React.HTMLAttributes<HTMLDivElement>;

export const DataTableToolbar = ({ className, ...props }: DataTableToolbarProps) => {
  const { slots } = useDataTableContext();
  return <div className={cn(slots.toolbar(), className)} {...props} />;
};

export type DataTableSearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onSearchChange?: (query: string) => void;
};

export const DataTableSearch = ({
  className,
  placeholder = "Filter...",
  onSearchChange,
  onChange,
  ...props
}: DataTableSearchProps) => {
  const { slots } = useDataTableContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    onSearchChange?.(e.target.value);
  };

  return (
    <div className={cn(slots.search(), className)}>
      <Search className="text-muted-foreground h-4 w-4 shrink-0" />
      <input placeholder={placeholder} onChange={handleChange} {...props} />
    </div>
  );
};

export type DataTableColumnHeaderProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  sortDirection?: "asc" | "desc" | null;
  onToggleSort?: () => void;
};

export const DataTableColumnHeader = ({
  children,
  className,
  sortDirection,
  onToggleSort,
  ...props
}: DataTableColumnHeaderProps) => {
  const { slots } = useDataTableContext();

  return (
    <button
      type="button"
      className={cn(slots.columnHeader(), className)}
      onClick={onToggleSort}
      {...props}
    >
      {children}
      {sortDirection === "asc" && <ArrowUp className="h-3.5 w-3.5" />}
      {sortDirection === "desc" && <ArrowDown className="h-3.5 w-3.5" />}
      {sortDirection === null && <ArrowUpDown className="h-3.5 w-3.5 opacity-40" />}
    </button>
  );
};

export type DataTablePaginationProps = {
  pageIndex: number;
  pageCount: number;
  pageSize: number;
  totalItems: number;
  selectedCount?: number;
  onPageChange: (page: number) => void;
};

export const DataTablePagination = ({
  pageIndex,
  pageCount,
  pageSize,
  totalItems,
  selectedCount = 0,
  onPageChange,
}: DataTablePaginationProps) => {
  const { slots } = useDataTableContext();

  const startItem = pageIndex * pageSize + 1;
  const endItem = Math.min((pageIndex + 1) * pageSize, totalItems);

  return (
    <div className={slots.pagination()}>
      <div className={slots.paginationInfo()}>
        {selectedCount > 0 && (
          <span className="text-foreground mr-2 font-medium">{selectedCount} row(s) selected.</span>
        )}
        {totalItems > 0 ? (
          <span>
            Showing {startItem}-{endItem} of {totalItems} items
          </span>
        ) : (
          <span>No items to display</span>
        )}
      </div>

      <div className={slots.paginationControls()}>
        <button
          type="button"
          className={slots.pageButton()}
          disabled={pageIndex === 0}
          onClick={() => onPageChange(0)}
          title="First page"
        >
          <ChevronsLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={slots.pageButton()}
          disabled={pageIndex === 0}
          onClick={() => onPageChange(pageIndex - 1)}
          title="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="px-2 text-xs">
          Page {pageIndex + 1} of {Math.max(pageCount, 1)}
        </span>
        <button
          type="button"
          className={slots.pageButton()}
          disabled={pageIndex >= pageCount - 1}
          onClick={() => onPageChange(pageIndex + 1)}
          title="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <button
          type="button"
          className={slots.pageButton()}
          disabled={pageIndex >= pageCount - 1}
          onClick={() => onPageChange(pageCount - 1)}
          title="Last page"
        >
          <ChevronsRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  searchable?: boolean;
  searchPlaceholder?: string;
  enableSelection?: boolean;
  pageSize?: number;
  className?: string;
  emptyMessage?: React.ReactNode;
  onRowClick?: (row: T) => void;
};

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  searchable = true,
  searchPlaceholder = "Search data...",
  enableSelection = false,
  pageSize = 5,
  className,
  emptyMessage = "No results found.",
  onRowClick,
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  // Filter
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data;
    const q = searchQuery.toLowerCase();
    return data.filter((row) =>
      Object.values(row).some((val) =>
        String(val ?? "")
          .toLowerCase()
          .includes(q),
      ),
    );
  }, [data, searchQuery]);

  // Sort
  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;
    const col = columns.find((c) => c.id === sortColumn);
    if (!col) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aVal = col.accessorKey ? a[col.accessorKey] : a[col.id];
      const bVal = col.accessorKey ? b[col.accessorKey] : b[col.id];

      if (aVal === bVal) return 0;
      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;

      const comp = aVal < bVal ? -1 : 1;
      return sortDirection === "asc" ? comp : -comp;
    });
  }, [filteredData, sortColumn, sortDirection, columns]);

  // Paginate
  const pageCount = Math.ceil(sortedData.length / pageSize);
  const paginatedData = useMemo(() => {
    const start = pageIndex * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, pageIndex, pageSize]);

  const handleToggleSort = (colId: string) => {
    if (sortColumn === colId) {
      if (sortDirection === "asc") setSortDirection("desc");
      else setSortColumn(null);
    } else {
      setSortColumn(colId);
      setSortDirection("asc");
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIndices = new Set(sortedData.map((_, i) => i));
      setSelectedRows(allIndices);
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (index: number, checked: boolean) => {
    const next = new Set(selectedRows);
    if (checked) next.add(index);
    else next.delete(index);
    setSelectedRows(next);
  };

  const isAllSelected = sortedData.length > 0 && selectedRows.size === sortedData.length;

  return (
    <DataTableRoot className={className}>
      {searchable && (
        <DataTableToolbar>
          <DataTableSearch
            placeholder={searchPlaceholder}
            onSearchChange={(q) => {
              setSearchQuery(q);
              setPageIndex(0);
            }}
          />
        </DataTableToolbar>
      )}

      <div className="data-table__container">
        <TableRoot>
          <TableHeader>
            <TableRow>
              {enableSelection && (
                <TableHead className="w-10">
                  <Checkbox.Root
                    checked={isAllSelected}
                    onCheckedChange={(checked) => handleSelectAll(!!checked)}
                  >
                    <Checkbox.Indicator />
                  </Checkbox.Root>
                </TableHead>
              )}
              {columns.map((col) => (
                <TableHead key={col.id}>
                  {col.sortable ? (
                    <DataTableColumnHeader
                      sortDirection={sortColumn === col.id ? sortDirection : null}
                      onToggleSort={() => handleToggleSort(col.id)}
                    >
                      {typeof col.header === "function" ? col.header({ column: col }) : col.header}
                    </DataTableColumnHeader>
                  ) : typeof col.header === "function" ? (
                    col.header({ column: col })
                  ) : (
                    col.header
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, i) => {
                const rowIndex = pageIndex * pageSize + i;
                const isSelected = selectedRows.has(rowIndex);

                return (
                  <TableRow
                    key={rowIndex}
                    data-state={isSelected ? "selected" : undefined}
                    className={onRowClick ? "cursor-pointer" : undefined}
                    onClick={() => onRowClick?.(row)}
                  >
                    {enableSelection && (
                      <TableCell className="w-10" onClick={(e) => e.stopPropagation()}>
                        <Checkbox.Root
                          checked={isSelected}
                          onCheckedChange={(checked) => handleSelectRow(rowIndex, !!checked)}
                        >
                          <Checkbox.Indicator />
                        </Checkbox.Root>
                      </TableCell>
                    )}
                    {columns.map((col) => (
                      <TableCell key={col.id}>{col.cell({ row, index: rowIndex })}</TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (enableSelection ? 1 : 0)}
                  className="text-muted-foreground h-24 text-center"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableRoot>
      </div>

      <DataTablePagination
        pageIndex={pageIndex}
        pageCount={pageCount}
        pageSize={pageSize}
        totalItems={sortedData.length}
        selectedCount={selectedRows.size}
        onPageChange={setPageIndex}
      />
    </DataTableRoot>
  );
}
