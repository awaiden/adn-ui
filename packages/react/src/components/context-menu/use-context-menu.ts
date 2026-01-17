import { useContext } from "react";

import { ContextMenuContext } from "./context-menu.context";

export const useContextMenu = () => {
  const context = useContext(ContextMenuContext);

  if (!context) {
    throw new Error("useContextMenu must be used within a ContextMenuProvider");
  }

  return context;
};
