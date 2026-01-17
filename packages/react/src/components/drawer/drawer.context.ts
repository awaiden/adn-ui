import { createContext } from "react";

import type { drawerVariants } from "./drawer.variants";

interface DrawerContext {
  slots: ReturnType<typeof drawerVariants>;
}

export const DrawerContext = createContext<DrawerContext | null>(null);
