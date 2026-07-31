"use client";

import { createContext, useContext } from "react";

import { badgeVariants } from "./badge.variants";

export type BadgeContext = {
  slots: ReturnType<typeof badgeVariants>;
};

export const BadgeContext = createContext<BadgeContext | null>(null);

export const useBadgeContext = () => {
  const context = useContext(BadgeContext);
  return context ?? { slots: badgeVariants() };
};
