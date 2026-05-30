import { createContext, useContext } from "react";

import { selectVariants } from "./select.variants";

export type SelectContext = {
  slots: ReturnType<typeof selectVariants>;
};

export const SelectContext = createContext<null | SelectContext>(null);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelectContext must be used within a Select");
  }
  return context;
};
