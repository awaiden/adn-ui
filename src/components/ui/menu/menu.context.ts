"use client";

import { createContext, useContext } from "react";

import { menuVariants } from "./menu.variants";

export type MenuContext = {
  slots: ReturnType<typeof menuVariants>;
};

export const MenuContext = createContext<MenuContext | null>(null);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  return context ?? { slots: menuVariants() };
};
