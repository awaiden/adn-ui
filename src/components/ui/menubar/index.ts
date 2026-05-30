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

export { MenubarContext, useMenubarContext } from "./menubar.context";

export { type MenubarVariants, menubarVariants } from "./menubar.variants";
