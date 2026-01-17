import { createContext } from "react";

import type { navbarVariants } from "./navbar.variants";

export interface NavbarContext {
  slots: ReturnType<typeof navbarVariants>;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarContext = createContext<NavbarContext | null>(null);
