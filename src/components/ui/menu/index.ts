import {
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuRoot,
  MenuSeparator,
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
  MenuTrigger,
} from "./menu";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const Menu = {
  CheckboxItem: MenuCheckboxItem,
  CheckboxItemIndicator: MenuCheckboxItemIndicator,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Item: MenuItem,
  Popup: MenuPopup,
  Portal: MenuPortal,
  Positioner: MenuPositioner,
  RadioGroup: MenuRadioGroup,
  RadioItem: MenuRadioItem,
  RadioItemIndicator: MenuRadioItemIndicator,
  Root: MenuRoot,
  Separator: MenuSeparator,
  SubmenuRoot: MenuSubmenuRoot,
  SubmenuTrigger: MenuSubmenuTrigger,
  Trigger: MenuTrigger,
};

export {
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuRoot,
  MenuSeparator,
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
  MenuTrigger,
};

export type {
  MenuCheckboxItemIndicatorProps,
  MenuCheckboxItemProps,
  MenuGroupLabelProps,
  MenuGroupProps,
  MenuItemProps,
  MenuPopupProps,
  MenuPortalProps,
  MenuPositionerProps,
  MenuProps,
  MenuRadioGroupProps,
  MenuRadioItemIndicatorProps,
  MenuRadioItemProps,
  MenuSeparatorProps,
  MenuSubmenuRootProps,
  MenuSubmenuTriggerProps,
  MenuTriggerProps,
} from "./menu";
export { MenuContext, useMenuContext } from "./menu.context";
export { type MenuVariants, menuVariants } from "./menu.variants";
