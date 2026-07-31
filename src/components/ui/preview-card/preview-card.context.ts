"use client";

import { createContext, useContext } from "react";

import { previewCardVariants } from "./preview-card.variants";

export type PreviewCardContext = {
  slots: ReturnType<typeof previewCardVariants>;
};

export const PreviewCardContext = createContext<PreviewCardContext | null>(null);

export const usePreviewCardContext = () => {
  const context = useContext(PreviewCardContext);
  return context ?? { slots: previewCardVariants() };
};
