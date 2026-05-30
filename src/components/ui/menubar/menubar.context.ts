import { createContext, useContext } from "react";

import { menubarVariants } from "./menubar.variants";

export type MenubarContext = {
  slots: ReturnType<typeof menubarVariants>;
};

export const MenubarContext = createContext<MenubarContext | null>(null);

export const useMenubarContext = () => {
  const context = useContext(MenubarContext);
  if (!context) {
    throw new Error("useMenubarContext must be used within a Menubar");
  }
  return context;
};
