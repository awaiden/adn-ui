import { createContext } from "react";

import type { menuVariants } from "./menu.variants";

export interface MenuContext {
  slots: ReturnType<typeof menuVariants>;
}

export const MenuContext = createContext<MenuContext | null>(null);
