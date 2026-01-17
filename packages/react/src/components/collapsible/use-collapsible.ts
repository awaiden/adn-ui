import { useContext } from "react";

import { CollapsibleContext } from "./collapsible.context";

export const useCollapsible = () => {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("useCollapsible must be used within a CollapsibleProvider");
  }
  return context;
};
