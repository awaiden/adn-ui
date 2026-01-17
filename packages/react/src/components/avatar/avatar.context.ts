import { createContext } from "react";

import type { avatarVariants } from "./avatar.variants";

export interface AvatarContext {
  slots: ReturnType<typeof avatarVariants>;
}

export const AvatarContext = createContext<AvatarContext | null>(null);
