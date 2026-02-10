import { Menu as BaseMenu } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { MenuContext } from "./menu.context";
import { type MenuVariants, menuVariants } from "./menu.variants";
import { useMenu } from "./use-menu";

// Root
export interface MenuProps extends MenuVariants, BaseMenu.Root.Props {}

export const MenuRoot = ({ ...props }: MenuProps) => {
  const slots = useMemo(() => menuVariants(), []);

  return (
    <MenuContext.Provider value={{ slots }}>
      <BaseMenu.Root {...props} />
    </MenuContext.Provider>
  );
};

// Trigger
export interface MenuTriggerProps extends MenuVariants, BaseMenu.Trigger.Props {}

export const MenuTrigger = ({ className, ...props }: MenuTriggerProps) => {
  const { slots } = useMenu();

  return (
    <BaseMenu.Trigger
      className={cn(slots.trigger(), className)}
      {...props}
    />
  );
};

// Portal
export interface MenuPortalProps extends MenuVariants, BaseMenu.Portal.Props {}

export const MenuPortal = ({ className, ...props }: MenuPortalProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.Portal
      className={cn(slots.portal(), className)}
      {...props}
    />
  );
};

// Backdrop
export interface MenuBackdropProps extends MenuVariants, BaseMenu.Backdrop.Props {}

export const MenuBackdrop = ({ className, ...props }: MenuBackdropProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.Backdrop
      className={cn(slots.backdrop(), className)}
      {...props}
    />
  );
};

// Positioner
export interface MenuPositionerProps extends MenuVariants, BaseMenu.Positioner.Props {}

export const MenuPositioner = ({ className, ...props }: MenuPositionerProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.Positioner
      className={cn(slots.positioner(), className)}
      {...props}
    />
  );
};

// Popup
export interface MenuPopupProps extends MenuVariants, BaseMenu.Popup.Props {}

export const MenuPopup = ({ className, ...props }: MenuPopupProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.Popup
      className={cn(slots.popup(), className)}
      {...props}
    />
  );
};

// Arrow
export interface MenuArrowProps extends MenuVariants, BaseMenu.Arrow.Props {}

export const MenuArrow = ({ className, ...props }: MenuArrowProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.Arrow
      className={cn(slots.arrow(), className)}
      {...props}
    />
  );
};

// Item
export interface MenuItemProps extends MenuVariants, BaseMenu.Item.Props {}

export const MenuItem = ({ className, ...props }: MenuItemProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.Item
      className={cn(slots.item(), className)}
      {...props}
    />
  );
};

// Separator
export interface MenuSeparatorProps extends MenuVariants, BaseMenu.Separator.Props {}

export const MenuSeparator = ({ className, ...props }: MenuSeparatorProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.Separator
      className={cn(slots.separator(), className)}
      {...props}
    />
  );
};

// Group
export interface MenuGroupProps extends MenuVariants, BaseMenu.Group.Props {}

export const MenuGroup = ({ className, ...props }: MenuGroupProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.Group
      className={cn(slots.group(), className)}
      {...props}
    />
  );
};

// Group Label
export interface MenuGroupLabelProps extends MenuVariants, BaseMenu.GroupLabel.Props {}

export const MenuGroupLabel = ({ className, ...props }: MenuGroupLabelProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.GroupLabel
      className={cn(slots.groupLabel(), className)}
      {...props}
    />
  );
};

// RadioGroup
export interface MenuRadioGroupProps extends MenuVariants, BaseMenu.RadioGroup.Props {}

export const MenuRadioGroup = ({ className, ...props }: MenuRadioGroupProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.RadioGroup
      className={cn(slots.radioGroup(), className)}
      {...props}
    />
  );
};

// RadioItem
export interface MenuRadioItemProps extends MenuVariants, BaseMenu.RadioItem.Props {}

export const MenuRadioItem = ({ className, ...props }: MenuRadioItemProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.RadioItem
      className={cn(slots.radioItem(), className)}
      {...props}
    />
  );
};

// CheckboxItem
export interface MenuCheckboxItemProps extends MenuVariants, BaseMenu.CheckboxItem.Props {}

export const MenuCheckboxItem = ({ className, ...props }: MenuCheckboxItemProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.CheckboxItem
      className={cn(slots.checkboxItem(), className)}
      {...props}
    />
  );
};

// Submenu
export interface MenuSubmenuProps extends MenuVariants, BaseMenu.SubmenuRoot.Props {}

export const MenuSubmenu = ({ ...props }: MenuSubmenuProps) => {
  return <BaseMenu.SubmenuRoot {...props} />;
};

// Submenu Trigger
export interface MenuSubmenuTriggerProps extends MenuVariants, BaseMenu.SubmenuTrigger.Props {}

export const MenuSubmenuTrigger = ({ className, ...props }: MenuSubmenuTriggerProps) => {
  const { slots } = useMenu();
  return (
    <BaseMenu.SubmenuTrigger
      className={cn(slots.submenuTrigger(), className)}
      {...props}
    />
  );
};
