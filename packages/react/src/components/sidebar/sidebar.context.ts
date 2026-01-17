import { createContext } from "react";

import type { sidebarVariants } from "./sidebar.variants";

interface SidebarContext {
  slots: ReturnType<typeof sidebarVariants>;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const SidebarContext = createContext<SidebarContext | null>(null);
