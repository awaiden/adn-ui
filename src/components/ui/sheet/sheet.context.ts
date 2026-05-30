import { createContext, useContext } from "react";

import { sheetVariants } from "./sheet.variants";

export type SheetContext = {
  slots: ReturnType<typeof sheetVariants>;
};

export const SheetContext = createContext<null | SheetContext>(null);

export const useSheetContext = () => {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error("useSheetContext must be used within a Sheet.Content");
  }
  return context;
};
