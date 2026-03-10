import { createContext, use } from "react";
import type { tableVariants } from "./table.variants";

type TableContextValue = {
	slots: ReturnType<typeof tableVariants>;
};

export const TableContext = createContext<TableContextValue | null>(null);

export function useTableContext() {
	const context = use(TableContext);

	if (!context) {
		throw new Error("useTableContext must be used within a TableRoot");
	}

	return context;
}
