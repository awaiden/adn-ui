"use client";

import { createContext, useContext } from "react";

import { textareaVariants } from "./textarea.variants";

export type TextareaContext = {
  slots: ReturnType<typeof textareaVariants>;
};

export const TextareaContext = createContext<TextareaContext | null>(null);

export const useTextareaContext = () => {
  const context = useContext(TextareaContext);
  return context ?? { slots: textareaVariants() };
};
