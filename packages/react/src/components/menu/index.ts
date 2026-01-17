import {
  MenuArrow,
  MenuBackdrop,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRoot,
  MenuSeparator,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuTrigger,
} from "./menu";

export const Menu = Object.assign(MenuRoot, {
  Arrow: MenuArrow,
  Backdrop: MenuBackdrop,
  CheckboxItem: MenuCheckboxItem,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Item: MenuItem,
  Popup: MenuPopup,
  Portal: MenuPortal,
  Positioner: MenuPositioner,
  RadioGroup: MenuRadioGroup,
  RadioItem: MenuRadioItem,
  Root: MenuRoot,
  Separator: MenuSeparator,
  Submenu: MenuSubmenu,
  SubmenuTrigger: MenuSubmenuTrigger,
  Trigger: MenuTrigger,
});

export * from "./menu";

export type { MenuVariants } from "./menu.variants";
export { menuVariants } from "./menu.variants";
