"use client";

import { createContext, useContext } from "react";

import { toastVariants } from "./toast.variants";

export type ToastContextType = {
  slots: ReturnType<typeof toastVariants>;
};

export const ToastContext = createContext<ToastContextType | null>(null);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  return context ?? { slots: toastVariants() };
};
