import { createContext, useContext } from "react";

import { toggleGroupVariants } from "./toggle-group.variants";

export type ToggleGroupContext = {
  slots: ReturnType<typeof toggleGroupVariants>;
};

export const ToggleGroupContext = createContext<null | ToggleGroupContext>(null);

export const useToggleGroupContext = () => {
  const context = useContext(ToggleGroupContext);
  if (!context) {
    throw new Error("useToggleGroupContext must be used within a ToggleGroup");
  }
  return context;
};
