import {
  AutocompleteArrow,
  AutocompleteBackdrop,
  AutocompleteClear,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteIcon,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteRoot,
  AutocompleteRow,
  AutocompleteSeparator,
  AutocompleteStatus,
  AutocompleteTrigger,
  AutocompleteValue,
} from "./autocomplete";

export const Autocomplete = Object.assign(AutocompleteRoot, {
  Arrow: AutocompleteArrow,
  Backdrop: AutocompleteBackdrop,
  Clear: AutocompleteClear,
  Empty: AutocompleteEmpty,
  Group: AutocompleteGroup,
  GroupLabel: AutocompleteGroupLabel,
  Icon: AutocompleteIcon,
  Input: AutocompleteInput,
  Item: AutocompleteItem,
  List: AutocompleteList,
  Popup: AutocompletePopup,
  Portal: AutocompletePortal,
  Positioner: AutocompletePositioner,
  Root: AutocompleteRoot,
  Row: AutocompleteRow,
  Separator: AutocompleteSeparator,
  Status: AutocompleteStatus,
  Trigger: AutocompleteTrigger,
  Value: AutocompleteValue,
});

export * from "./autocomplete";

export type { AutocompleteVariants } from "./autocomplete.variants";
export { autocompleteVariants } from "./autocomplete.variants";
