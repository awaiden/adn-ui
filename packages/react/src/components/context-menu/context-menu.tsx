import { ContextMenu as BaseContextMenu } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { ContextMenuContext } from "./context-menu.context";
import { type ContextMenuVariants, contextMenuVariants } from "./context-menu.variants";
import { useContextMenu } from "./use-context-menu";

// Root
export interface ContextMenuProps extends ContextMenuVariants, BaseContextMenu.Root.Props {}

export const ContextMenuRoot = ({ ...props }: ContextMenuProps) => {
  const slots = useMemo(() => contextMenuVariants(), []);

  return (
    <ContextMenuContext.Provider value={{ slots }}>
      <BaseContextMenu.Root {...props} />
    </ContextMenuContext.Provider>
  );
};

// Trigger
export interface ContextMenuTriggerProps extends BaseContextMenu.Trigger.Props {}
export const ContextMenuTrigger = ({ className, ...props }: ContextMenuTriggerProps) => {
  const { slots } = useContextMenu();

  return (
    <BaseContextMenu.Trigger
      className={cn(slots.trigger(), className)}
      {...props}
    />
  );
};

// Portal
export interface ContextMenuPortalProps extends BaseContextMenu.Portal.Props {}
export const ContextMenuPortal = ({ className, ...props }: ContextMenuPortalProps) => {
  const { slots } = useContextMenu();

  return (
    <BaseContextMenu.Portal
      className={cn(slots.portal(), className)}
      {...props}
    />
  );
};

// Backdrop
export interface ContextMenuBackdropProps extends BaseContextMenu.Backdrop.Props {}
export const ContextMenuBackdrop = ({ className, ...props }: ContextMenuBackdropProps) => {
  const { slots } = useContextMenu();
  return (
    <BaseContextMenu.Backdrop
      className={cn(slots.backdrop(), className)}
      {...props}
    />
  );
};

// Positioner
export interface ContextMenuPositionerProps extends BaseContextMenu.Positioner.Props {}
export const ContextMenuPositioner = ({ className, ...props }: ContextMenuPositionerProps) => {
  const { slots } = useContextMenu();

  return (
    <BaseContextMenu.Positioner
      className={cn(slots.positioner(), className)}
      {...props}
    />
  );
};

// Popup
export interface ContextMenuPopupProps extends BaseContextMenu.Popup.Props {}
export const ContextMenuPopup = ({ className, ...props }: ContextMenuPopupProps) => {
  const { slots } = useContextMenu();

  return (
    <BaseContextMenu.Popup
      className={cn(slots.popup(), className)}
      {...props}
    />
  );
};

// Arrow
export interface ContextMenuArrowProps extends BaseContextMenu.Arrow.Props {}
export const ContextMenuArrow = ({ className, ...props }: ContextMenuArrowProps) => {
  const { slots } = useContextMenu();

  return (
    <BaseContextMenu.Arrow
      className={cn(slots.arrow(), className)}
      {...props}
    />
  );
};

// Item
export interface ContextMenuItemProps extends BaseContextMenu.Item.Props {}
export const ContextMenuItem = ({ className, ...props }: ContextMenuItemProps) => {
  const { slots } = useContextMenu();

  return (
    <BaseContextMenu.Item
      className={cn(slots.item(), className)}
      {...props}
    />
  );
};

// Separator
export interface ContextMenuSeparatorProps extends BaseContextMenu.Separator.Props {}
export const ContextMenuSeparator = ({ className, ...props }: ContextMenuSeparatorProps) => {
  const { slots } = useContextMenu();

  return (
    <BaseContextMenu.Separator
      className={cn(slots.separator(), className)}
      {...props}
    />
  );
};

// Group
export interface ContextMenuGroupProps extends BaseContextMenu.Group.Props {}
export const ContextMenuGroup = ({ className, ...props }: ContextMenuGroupProps) => {
  const { slots } = useContextMenu();

  return (
    <BaseContextMenu.Group
      className={cn(slots.group(), className)}
      {...props}
    />
  );
};

// GroupLabel
export interface ContextMenuGroupLabelProps extends BaseContextMenu.GroupLabel.Props {}
export const ContextMenuGroupLabel = ({ className, ...props }: ContextMenuGroupLabelProps) => {
  const { slots } = useContextMenu();

  return (
    <BaseContextMenu.GroupLabel
      className={cn(slots.groupLabel(), className)}
      {...props}
    />
  );
};

// Submenu
export interface ContextMenuSubmenuProps extends BaseContextMenu.SubmenuRoot.Props {}
export const ContextMenuSubmenu = ({ ...props }: ContextMenuSubmenuProps) => {
  return <BaseContextMenu.SubmenuRoot {...props} />;
};

// SubmenuTrigger
export interface ContextMenuSubmenuTriggerProps extends BaseContextMenu.SubmenuTrigger.Props {}
export const ContextMenuSubmenuTrigger = ({
  className,
  children,
  ...props
}: ContextMenuSubmenuTriggerProps) => {
  const { slots } = useContextMenu();

  return (
    <BaseContextMenu.SubmenuTrigger
      className={cn(slots.submenuTrigger(), className)}
      {...props}
    >
      {children}
    </BaseContextMenu.SubmenuTrigger>
  );
};
