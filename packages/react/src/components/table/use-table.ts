import { useContext } from "react";

import { TableContext } from "./table.context";

export const useTable = () => {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("useTable must be used within a TableProvider");
  }

  return context;
};
