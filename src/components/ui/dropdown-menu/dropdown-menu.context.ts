"use client";

import { createContext, useContext } from "react";

import { dropdownMenuVariants } from "./dropdown-menu.variants";

export type DropdownMenuContext = {
  slots: ReturnType<typeof dropdownMenuVariants>;
};

export const DropdownMenuContext = createContext<DropdownMenuContext | null>(null);

export const useDropdownMenuContext = () => {
  const context = useContext(DropdownMenuContext);
  return context ?? { slots: dropdownMenuVariants() };
};
