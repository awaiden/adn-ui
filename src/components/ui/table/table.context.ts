import { createContext, useContext } from "react";

import { tableVariants } from "./table.variants";

export type TableContext = {
  slots: ReturnType<typeof tableVariants>;
};

export const TableContext = createContext<null | TableContext>(null);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext must be used within a Table.Root");
  }
  return context;
};
