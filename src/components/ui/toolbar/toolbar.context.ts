import { createContext, useContext } from "react";

import { toolbarVariants } from "./toolbar.variants";

export type ToolbarContext = {
  slots: ReturnType<typeof toolbarVariants>;
};

export const ToolbarContext = createContext<null | ToolbarContext>(null);

export const useToolbarContext = () => {
  const context = useContext(ToolbarContext);
  if (!context) {
    throw new Error("useToolbarContext must be used within a Toolbar");
  }
  return context;
};
