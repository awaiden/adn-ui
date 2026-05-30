import { createContext, useContext } from "react";

import { contextMenuVariants } from "./context-menu.variants";

export type ContextMenuContext = {
  slots: ReturnType<typeof contextMenuVariants>;
};

export const ContextMenuContext = createContext<ContextMenuContext | null>(null);

export const useContextMenuContext = () => {
  const context = useContext(ContextMenuContext);
  if (!context) {
    throw new Error("useContextMenuContext must be used within a ContextMenu");
  }
  return context;
};
