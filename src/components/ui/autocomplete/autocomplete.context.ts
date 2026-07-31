"use client";

import { createContext, useContext } from "react";

import { autocompleteVariants } from "./autocomplete.variants";

export type AutocompleteContext = {
  slots: ReturnType<typeof autocompleteVariants>;
};

export const AutocompleteContext = createContext<AutocompleteContext | null>(null);

export const useAutocompleteContext = () => {
  const context = useContext(AutocompleteContext);
  return context ?? { slots: autocompleteVariants() };
};
