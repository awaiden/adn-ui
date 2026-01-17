import { createContext } from "react";

import type { alertDialogVariants } from "./alert-dialog.variants";

interface AlertDialogContext {
  slots: ReturnType<typeof alertDialogVariants>;
}

export const AlertDialogContext = createContext<AlertDialogContext | null>(null);
