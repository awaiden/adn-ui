import { createContext, useContext } from "react";
import type { groupVariants } from "./group.variants";

interface GroupContextValue {
	slots: ReturnType<typeof groupVariants>;
}

export const GroupContext = createContext<GroupContextValue | null>(null);

export const useGroupContext = () => {
	const context = useContext(GroupContext);
	if (!context) {
		throw new Error("useGroupContext must be used within a GroupProvider");
	}
	return context;
};
