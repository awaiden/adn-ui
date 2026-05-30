import { createContext, useContext } from "react";

import { alertDialogVariants } from "./alert-dialog.variants";

export type AlertDialogContext = {
  slots: ReturnType<typeof alertDialogVariants>;
};

export const AlertDialogContext = createContext<AlertDialogContext | null>(null);

export const useAlertDialogContext = () => {
  const context = useContext(AlertDialogContext);
  if (!context) {
    throw new Error("useAlertDialogContext must be used within an AlertDialog");
  }
  return context;
};
