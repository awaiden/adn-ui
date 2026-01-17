import { createContext } from "react";

import type { previewCardVariants } from "./preview-card.variants";

interface PreviewCardContext {
  slots: ReturnType<typeof previewCardVariants>;
}

export const PreviewCardContext = createContext<PreviewCardContext | null>(null);
