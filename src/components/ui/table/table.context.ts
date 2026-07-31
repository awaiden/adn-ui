"use client";

import { createContext, useContext } from "react";

import { tableVariants } from "./table.variants";

export type TableContext = {
  slots: ReturnType<typeof tableVariants>;
};

export const TableContext = createContext<TableContext | null>(null);

export const useTableContext = () => {
  const context = useContext(TableContext);
  return context ?? { slots: tableVariants() };
};
