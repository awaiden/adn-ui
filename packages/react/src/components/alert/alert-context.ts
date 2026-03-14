import type { alertVariants } from "@adn-ui/core";

import { createContext, use } from "react";

type AlertContextValue = {
  slots: ReturnType<typeof alertVariants>;
};

export const AlertContext = createContext<AlertContextValue | null>(null);

export function useAlertContext() {
  const context = use(AlertContext);

  if (!context) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }

  return context;
}
