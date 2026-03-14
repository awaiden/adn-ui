import type { fieldVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface FieldContextValue {
	id: string;
	slots: ReturnType<typeof fieldVariants>;
}

export const [getFieldContext, setFieldContext] =
	createContext<FieldContextValue>();
