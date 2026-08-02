"use client";

import { createContext, useContext } from "react";

import { sidebarVariants } from "./sidebar.variants";

export type SidebarContext = {
  slots: ReturnType<typeof sidebarVariants>;
  open: boolean;
  setOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  toggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContext | null>(null);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
