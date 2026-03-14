import type { ScrollAreaVariants } from "@adn-ui/core/scroll-area.variants";
import { createContext } from "svelte";

export const [getScrollAreaContext, setScrollAreaContext] =
	createContext<ScrollAreaVariants>();
