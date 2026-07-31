"use client";

import { createContext, useContext } from "react";

import { avatarVariants } from "./avatar.variants";

export type AvatarContext = {
  slots: ReturnType<typeof avatarVariants>;
};

export const AvatarContext = createContext<AvatarContext | null>(null);

export const useAvatarContext = () => {
  const context = useContext(AvatarContext);
  return context ?? { slots: avatarVariants() };
};
