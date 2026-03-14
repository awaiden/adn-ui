import type { checkboxVariants } from "@adn-ui/core";

import { createContext, use } from "react";

type CheckboxContextValue = {
  slots: ReturnType<typeof checkboxVariants>;
};

export const CheckboxContext = createContext<CheckboxContextValue | null>(null);

export function useCheckboxContext() {
  const context = use(CheckboxContext);

  if (!context) {
    throw new Error("useCheckboxContext must be used within a CheckboxProvider");
  }

  return context;
}
