import { createContext, useContext } from "react";

import { alertVariants } from "./alert.variants";

export type AlertContext = {
  slots: ReturnType<typeof alertVariants>;
};

export const AlertContext = createContext<AlertContext | null>(null);

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertContext must be used within an Alert.Root");
  }
  return context;
};
