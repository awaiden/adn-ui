import { useContext } from "react";

import { AutocompleteContext } from "./autocomplete.context";

export const useAutocomplete = () => {
  const context = useContext(AutocompleteContext);

  if (!context) {
    throw new Error("useAutocomplete must be used within a AutocompleteProvider");
  }

  return context;
};
