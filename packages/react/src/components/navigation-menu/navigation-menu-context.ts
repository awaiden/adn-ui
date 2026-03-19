import type { navigationMenuVariants } from "@adn-ui/core";

import { createContext, useContext } from "react";

interface NavigationMenuContextValue {
  slots: ReturnType<typeof navigationMenuVariants>;
}

export const NavigationMenuContext = createContext<NavigationMenuContextValue | null>(null);

export const useNavigationMenuContext = () => {
  const context = useContext(NavigationMenuContext);
  if (!context) {
    throw new Error("useNavigationMenuContext must be used within a NavigationMenuRoot");
  }
  return context;
};
