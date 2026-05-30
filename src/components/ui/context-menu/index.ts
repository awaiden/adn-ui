import { ContextMenuCheckboxItem } from "./context-menu-checkbox-item";
import { ContextMenuContent } from "./context-menu-content";
import { ContextMenuItem } from "./context-menu-item";
import { ContextMenuLabel } from "./context-menu-label";
import { ContextMenuRadioItem } from "./context-menu-radio-item";
import { ContextMenuRoot } from "./context-menu-root";
import { ContextMenuSeparator } from "./context-menu-separator";
import { ContextMenuShortcut } from "./context-menu-shortcut";
import { ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger } from "./context-menu-sub";
import { ContextMenuTrigger } from "./context-menu-trigger";

export const ContextMenu = {
  CheckboxItem: ContextMenuCheckboxItem,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
  Label: ContextMenuLabel,
  RadioItem: ContextMenuRadioItem,
  Root: ContextMenuRoot,
  Separator: ContextMenuSeparator,
  Shortcut: ContextMenuShortcut,
  Sub: ContextMenuSub,
  SubContent: ContextMenuSubContent,
  SubTrigger: ContextMenuSubTrigger,
  Trigger: ContextMenuTrigger,
};

export {
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioItem,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};

export type { ContextMenuCheckboxItemProps } from "./context-menu-checkbox-item";

export type { ContextMenuContentProps } from "./context-menu-content";

export type { ContextMenuItemProps } from "./context-menu-item";
export type { ContextMenuLabelProps } from "./context-menu-label";
export type { ContextMenuRadioItemProps } from "./context-menu-radio-item";
export type { ContextMenuRootProps } from "./context-menu-root";
export type { ContextMenuSeparatorProps } from "./context-menu-separator";
export type { ContextMenuShortcutProps } from "./context-menu-shortcut";
export type {
  ContextMenuSubContentProps,
  ContextMenuSubProps,
  ContextMenuSubTriggerProps,
} from "./context-menu-sub";
export type { ContextMenuTriggerProps } from "./context-menu-trigger";
export { ContextMenuContext, useContextMenuContext } from "./context-menu.context";
export { type ContextMenuVariants, contextMenuVariants } from "./context-menu.variants";
