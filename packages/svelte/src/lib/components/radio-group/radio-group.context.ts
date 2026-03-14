import type { radioGroupVariants } from "@adn-ui/core";
import { createContext } from "svelte";

export interface RadioGroupContextValue {
	slots: ReturnType<typeof radioGroupVariants>;
}

export const [getRadioGroupContext, setRadioGroupContext] =
	createContext<RadioGroupContextValue>();
