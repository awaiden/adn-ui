import { createContext } from "react";

import type { contextMenuVariants } from "./context-menu.variants";

interface ContextMenuContext {
  slots: ReturnType<typeof contextMenuVariants>;
}

export const ContextMenuContext = createContext<ContextMenuContext | null>(null);
