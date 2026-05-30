import { MenubarCheckboxItem } from "./menubar-checkbox-item";
import { MenubarContent } from "./menubar-content";
import { MenubarItem } from "./menubar-item";
import { MenubarLabel } from "./menubar-label";
import { MenubarMenu } from "./menubar-menu";
import { MenubarRadioItem } from "./menubar-radio-item";
import { MenubarRoot } from "./menubar-root";
import { MenubarSeparator } from "./menubar-separator";
import { MenubarShortcut } from "./menubar-shortcut";
import { MenubarSub, MenubarSubContent, MenubarSubTrigger } from "./menubar-sub";
import { MenubarTrigger } from "./menubar-trigger";

export const Menubar = {
  CheckboxItem: MenubarCheckboxItem,
  Content: MenubarContent,
  Item: MenubarItem,
  Label: MenubarLabel,
  Menu: MenubarMenu,
  RadioItem: MenubarRadioItem,
  Root: MenubarRoot,
  Separator: MenubarSeparator,
  Shortcut: MenubarShortcut,
  Sub: MenubarSub,
  SubContent: MenubarSubContent,
  SubTrigger: MenubarSubTrigger,
  Trigger: MenubarTrigger,
};

export {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};

export type { MenubarCheckboxItemProps } from "./menubar-checkbox-item";

export type { MenubarContentProps } from "./menubar-content";

export type { MenubarItemProps } from "./menubar-item";
export type { MenubarLabelProps } from "./menubar-label";
export type { MenubarMenuProps } from "./menubar-menu";
export type { MenubarRadioItemProps } from "./menubar-radio-item";
export type { MenubarRootProps } from "./menubar-root";
export type { MenubarSeparatorProps } from "./menubar-separator";
export type { MenubarShortcutProps } from "./menubar-shortcut";
export type {
  MenubarSubContentProps,
  MenubarSubProps,
  MenubarSubTriggerProps,
} from "./menubar-sub";
export type { MenubarTriggerProps } from "./menubar-trigger";
export { MenubarContext, useMenubarContext } from "./menubar.context";
export { type MenubarVariants, menubarVariants } from "./menubar.variants";
