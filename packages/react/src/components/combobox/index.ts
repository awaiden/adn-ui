import {
  ComboboxArrow,
  ComboboxBackdrop,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxChips,
  ComboboxClear,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxRow,
  ComboboxSeparator,
  ComboboxStatus,
  ComboboxTrigger,
  ComboboxValue,
} from "./combobox";

export const Combobox = Object.assign(ComboboxRoot, {
  Arrow: ComboboxArrow,
  Backdrop: ComboboxBackdrop,
  Chip: ComboboxChip,
  ChipRemove: ComboboxChipRemove,
  Chips: ComboboxChips,
  Clear: ComboboxClear,
  Empty: ComboboxEmpty,
  Group: ComboboxGroup,
  GroupLabel: ComboboxGroupLabel,
  Input: ComboboxInput,
  Item: ComboboxItem,
  ItemIndicator: ComboboxItemIndicator,
  List: ComboboxList,
  Popup: ComboboxPopup,
  Portal: ComboboxPortal,
  Positioner: ComboboxPositioner,
  Root: ComboboxRoot,
  Row: ComboboxRow,
  Separator: ComboboxSeparator,
  Status: ComboboxStatus,
  Trigger: ComboboxTrigger,
  Value: ComboboxValue,
});

export * from "./combobox";

export type { ComboboxVariants } from "./combobox.variants";
export { comboboxVariants } from "./combobox.variants";
