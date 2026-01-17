import {
  SelectArrow,
  SelectBackdrop,
  SelectGroup,
  SelectGroupLabel,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";

export const Select = Object.assign(SelectRoot, {
  Arrow: SelectArrow,
  Backdrop: SelectBackdrop,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
  Icon: SelectIcon,
  Item: SelectItem,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  List: SelectList,
  Popup: SelectPopup,
  Portal: SelectPortal,
  Positioner: SelectPositioner,
  Root: SelectRoot,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  Value: SelectValue,
});

export * from "./select";

export type { SelectVariants } from "./select.variants";
export { selectVariants } from "./select.variants";
