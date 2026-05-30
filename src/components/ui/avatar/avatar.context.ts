import { createContext, useContext } from "react";

import { avatarVariants } from "./avatar.variants";

export type AvatarContext = {
  slots: ReturnType<typeof avatarVariants>;
};

export const AvatarContext = createContext<AvatarContext | null>(null);

export const useAvatarContext = () => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error("useAvatarContext must be used within an Avatar");
  }
  return context;
};
