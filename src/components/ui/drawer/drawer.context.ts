"use client";

import { createContext, useContext } from "react";

import { drawerVariants } from "./drawer.variants";

export type DrawerContext = {
  slots: ReturnType<typeof drawerVariants>;
};

export const DrawerContext = createContext<DrawerContext | null>(null);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  return context ?? { slots: drawerVariants() };
};
