import { createContext, useContext } from "react";

import { dropdownMenuVariants } from "./dropdown-menu.variants";

export type DropdownMenuContext = {
  slots: ReturnType<typeof dropdownMenuVariants>;
};

export const DropdownMenuContext = createContext<DropdownMenuContext | null>(null);

export const useDropdownMenuContext = () => {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error("useDropdownMenuContext must be used within a DropdownMenu");
  }
  return context;
};
