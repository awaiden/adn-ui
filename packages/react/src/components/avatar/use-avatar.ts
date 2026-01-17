import { useContext } from "react";

import { AvatarContext } from "./avatar.context";

export const useAvatar = () => {
  const ctx = useContext(AvatarContext);

  if (!ctx) {
    throw new Error("useAvatar must be used within the Avatar component.");
  }

  return ctx;
};
