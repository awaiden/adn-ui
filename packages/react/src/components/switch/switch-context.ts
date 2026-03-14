import type { switchVariants } from "@adn-ui/core";

import { createContext, use } from "react";

type SwitchContextValue = {
  slots: ReturnType<typeof switchVariants>;
};

export const SwitchContext = createContext<SwitchContextValue | null>(null);

export function useSwitchContext() {
  const context = use(SwitchContext);

  if (!context) {
    throw new Error("useSwitchContext must be used within a SwitchProvider");
  }

  return context;
}
