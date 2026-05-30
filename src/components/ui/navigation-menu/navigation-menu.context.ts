import { createContext, useContext } from "react";

import { navigationMenuVariants } from "./navigation-menu.variants";

export type NavigationMenuContext = {
  slots: ReturnType<typeof navigationMenuVariants>;
};

export const NavigationMenuContext = createContext<NavigationMenuContext | null>(null);

export const useNavigationMenuContext = () => {
  const context = useContext(NavigationMenuContext);
  if (!context) {
    throw new Error("useNavigationMenuContext must be used within a NavigationMenu");
  }
  return context;
};
