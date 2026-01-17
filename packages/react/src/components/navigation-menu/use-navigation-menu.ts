import { useContext } from "react";

import { NavigationMenuContext } from "./navigation-menu.context";

export const useNavigationMenu = () => {
  const context = useContext(NavigationMenuContext);

  if (!context) {
    throw new Error("useNavigationMenu must be used within a NavigationMenuProvider");
  }

  return context;
};
