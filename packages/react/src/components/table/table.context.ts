import { createContext } from "react";

import type { tableVariants } from "./table.variants";

interface TableContext {
  slots: ReturnType<typeof tableVariants>;
}

export const TableContext = createContext<TableContext | null>(null);
