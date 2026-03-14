import type { progressVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface ProgressContextValue {
	slots: ReturnType<typeof progressVariants>;
}

export const [getProgressContext, setProgressContext] =
	createContext<ProgressContextValue>();
