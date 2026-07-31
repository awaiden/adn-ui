"use client";

import { createContext, useContext } from "react";

import { dialogVariants } from "./dialog.variants";

export type DialogContext = {
  slots: ReturnType<typeof dialogVariants>;
};

export const DialogContext = createContext<DialogContext | null>(null);

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  return context ?? { slots: dialogVariants() };
};
