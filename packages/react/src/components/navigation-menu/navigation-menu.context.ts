import { createContext } from "react";

import type { navigationMenuVariants } from "./navigation-menu.variants";

interface NavigationMenuContext {
  slots: ReturnType<typeof navigationMenuVariants>;
}

export const NavigationMenuContext = createContext<NavigationMenuContext | null>(null);
