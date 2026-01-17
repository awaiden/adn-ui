import {
  ContextMenuArrow,
  ContextMenuBackdrop,
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuSubmenu,
  ContextMenuSubmenuTrigger,
  ContextMenuTrigger,
} from "./context-menu";

export const ContextMenu = Object.assign(ContextMenuRoot, {
  Arrow: ContextMenuArrow,
  Backdrop: ContextMenuBackdrop,
  Group: ContextMenuGroup,
  GroupLabel: ContextMenuGroupLabel,
  Item: ContextMenuItem,
  Popup: ContextMenuPopup,
  Portal: ContextMenuPortal,
  Positioner: ContextMenuPositioner,
  Root: ContextMenuRoot,
  Separator: ContextMenuSeparator,
  SubmenuRoot: ContextMenuSubmenu,
  SubmenuTrigger: ContextMenuSubmenuTrigger,
  Trigger: ContextMenuTrigger,
});

export * from "./context-menu";

export type { ContextMenuVariants } from "./context-menu.variants";
export { contextMenuVariants } from "./context-menu.variants";
