import type { avatarVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface AvatarContextValue {
	slots: ReturnType<typeof avatarVariants>;
}

export const [getAvatarContext, setAvatarContext] =
	createContext<AvatarContextValue>();
