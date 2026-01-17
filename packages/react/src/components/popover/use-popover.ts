import { useContext } from "react";

import { PopoverContext } from "./popover.context";

export const usePopover = () => {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error("usePopover must be used within a PopoverProvider");
  }

  return context;
};
