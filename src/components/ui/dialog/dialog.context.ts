import { createContext, useContext } from "react";

import { dialogVariants } from "./dialog.variants";

export type DialogContext = {
  slots: ReturnType<typeof dialogVariants>;
};

export const DialogContext = createContext<DialogContext | null>(null);

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogContext must be used within a Dialog");
  }
  return context;
};
