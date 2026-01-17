import { createContext } from "react";

import type { autocompleteVariants } from "./autocomplete.variants";

interface AutocompleteContext {
  slots: ReturnType<typeof autocompleteVariants>;
}

export const AutocompleteContext = createContext<AutocompleteContext | null>(null);
