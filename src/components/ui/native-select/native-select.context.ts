"use client";

import { createContext, useContext } from "react";

import { nativeSelectVariants } from "./native-select.variants";

export type NativeSelectContext = {
  slots: ReturnType<typeof nativeSelectVariants>;
};

export const NativeSelectContext = createContext<NativeSelectContext | null>(null);

export const useNativeSelectContext = () => {
  const context = useContext(NativeSelectContext);
  return context ?? { slots: nativeSelectVariants() };
};
