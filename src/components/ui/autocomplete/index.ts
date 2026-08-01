import {
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteRoot,
  AutocompleteStatus,
} from "./autocomplete";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/autocomplete/content.md
 */
export const Autocomplete = {
  Empty: AutocompleteEmpty,
  Input: AutocompleteInput,
  Item: AutocompleteItem,
  List: AutocompleteList,
  Popup: AutocompletePopup,
  Portal: AutocompletePortal,
  Positioner: AutocompletePositioner,
  Root: AutocompleteRoot,
  Status: AutocompleteStatus,
};

export {
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteRoot,
  AutocompleteStatus,
};

export type {
  AutocompleteEmptyProps,
  AutocompleteInputProps,
  AutocompleteItemProps,
  AutocompleteListProps,
  AutocompletePopupProps,
  AutocompletePortalProps,
  AutocompletePositionerProps,
  AutocompleteProps,
  AutocompleteStatusProps,
} from "./autocomplete";
export { AutocompleteContext, useAutocompleteContext } from "./autocomplete.context";
export { type AutocompleteVariants, autocompleteVariants } from "./autocomplete.variants";
