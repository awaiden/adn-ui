import { DropdownMenuCheckboxItem } from "./dropdown-menu-checkbox-item";
import { DropdownMenuContent } from "./dropdown-menu-content";
import { DropdownMenuItem } from "./dropdown-menu-item";
import { DropdownMenuLabel } from "./dropdown-menu-label";
import { DropdownMenuRadioItem } from "./dropdown-menu-radio-item";
import { DropdownMenuRoot } from "./dropdown-menu-root";
import { DropdownMenuSeparator } from "./dropdown-menu-separator";
import { DropdownMenuShortcut } from "./dropdown-menu-shortcut";
import {
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./dropdown-menu-sub";
import { DropdownMenuTrigger } from "./dropdown-menu-trigger";

export const DropdownMenu = {
  CheckboxItem: DropdownMenuCheckboxItem,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Label: DropdownMenuLabel,
  RadioItem: DropdownMenuRadioItem,
  Root: DropdownMenuRoot,
  Separator: DropdownMenuSeparator,
  Shortcut: DropdownMenuShortcut,
  Sub: DropdownMenuSub,
  SubContent: DropdownMenuSubContent,
  SubTrigger: DropdownMenuSubTrigger,
  Trigger: DropdownMenuTrigger,
};

export {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};

export type { DropdownMenuCheckboxItemProps } from "./dropdown-menu-checkbox-item";

export type { DropdownMenuContentProps } from "./dropdown-menu-content";

export type { DropdownMenuItemProps } from "./dropdown-menu-item";
export type { DropdownMenuLabelProps } from "./dropdown-menu-label";
export type { DropdownMenuRadioItemProps } from "./dropdown-menu-radio-item";
export type { DropdownMenuRootProps } from "./dropdown-menu-root";
export type { DropdownMenuSeparatorProps } from "./dropdown-menu-separator";
export type { DropdownMenuShortcutProps } from "./dropdown-menu-shortcut";
export type {
  DropdownMenuSubContentProps,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
} from "./dropdown-menu-sub";
export type { DropdownMenuTriggerProps } from "./dropdown-menu-trigger";
export { DropdownMenuContext, useDropdownMenuContext } from "./dropdown-menu.context";
export { type DropdownMenuVariants, dropdownMenuVariants } from "./dropdown-menu.variants";
