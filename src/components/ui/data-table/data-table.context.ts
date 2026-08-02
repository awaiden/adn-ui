"use client";

import { createContext, useContext } from "react";

import { dataTableVariants } from "./data-table.variants";

export type DataTableContextType = {
  slots: ReturnType<typeof dataTableVariants>;
};

export const DataTableContext = createContext<DataTableContextType | null>(null);

export const useDataTableContext = () => {
  const context = useContext(DataTableContext);
  return context ?? { slots: dataTableVariants() };
};
