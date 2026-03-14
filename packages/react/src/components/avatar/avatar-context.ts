import type { avatarVariants } from "@adn-ui/core";

import { createContext, use } from "react";

type AvatarContextValue = {
	slots: ReturnType<typeof avatarVariants>;
};

export const AvatarContext = createContext<AvatarContextValue | null>(null);

export function useAvatarContext() {
	const context = use(AvatarContext);

	if (!context) {
		throw new Error("useAvatarContext must be used within an AvatarProvider");
	}

	return context;
}
