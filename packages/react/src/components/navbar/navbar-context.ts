import type { navbarVariants } from "@adn-ui/core";

import { createContext, useContext } from "react";

interface NavbarContextValue {
  slots: ReturnType<typeof navbarVariants>;
  isOpen?: boolean;
}

export const NavbarContext = createContext<NavbarContextValue | null>(null);

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a NavbarRoot");
  }
  return context;
};
