import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react";
import { ChevronDown } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { NavigationMenuContext } from "./navigation-menu.context";
import { type NavigationMenuVariants, navigationMenuVariants } from "./navigation-menu.variants";
import { useNavigationMenu } from "./use-navigation-menu";

// Root
export interface NavigationMenuProps
  extends NavigationMenuVariants, BaseNavigationMenu.Root.Props {}

export const NavigationMenuRoot = ({ className, ...props }: NavigationMenuProps) => {
  const slots = useMemo(() => navigationMenuVariants(), []);

  return (
    <NavigationMenuContext.Provider value={{ slots }}>
      <BaseNavigationMenu.Root
        className={cn(className, slots.root())}
        {...props}
      />
    </NavigationMenuContext.Provider>
  );
};

// List
export interface NavigationMenuListProps extends BaseNavigationMenu.List.Props {}

export const NavigationMenuList = ({ className, ...props }: NavigationMenuListProps) => {
  const { slots } = useNavigationMenu();
  return (
    <BaseNavigationMenu.List
      className={cn(slots.list(), className)}
      {...props}
    />
  );
};

// Item
export interface NavigationMenuItemProps extends BaseNavigationMenu.Item.Props {}

export const NavigationMenuItem = ({ className, ...props }: NavigationMenuItemProps) => {
  const { slots } = useNavigationMenu();
  return (
    <BaseNavigationMenu.Item
      className={cn(slots.item(), className)}
      {...props}
    />
  );
};

// Trigger
export interface NavigationMenuTriggerProps extends BaseNavigationMenu.Trigger.Props {}

export const NavigationMenuTrigger = ({
  className,
  children,
  ...props
}: NavigationMenuTriggerProps) => {
  const { slots } = useNavigationMenu();
  return (
    <BaseNavigationMenu.Trigger
      className={cn(slots.trigger(), className)}
      {...props}
    >
      {children}
    </BaseNavigationMenu.Trigger>
  );
};

// Icon
export interface NavigationMenuIconProps extends BaseNavigationMenu.Icon.Props {}

export const NavigationMenuIcon = ({ className, children, ...props }: NavigationMenuIconProps) => {
  const { slots } = useNavigationMenu();
  return (
    <BaseNavigationMenu.Icon
      className={cn(slots.icon(), className)}
      {...props}
    >
      {children || <ChevronDown />}
    </BaseNavigationMenu.Icon>
  );
};

// Content
export interface NavigationMenuContentProps extends BaseNavigationMenu.Content.Props {}

export const NavigationMenuContent = ({ className, ...props }: NavigationMenuContentProps) => {
  const { slots } = useNavigationMenu();
  return (
    <BaseNavigationMenu.Content
      className={cn(slots.content(), className)}
      {...props}
    />
  );
};

// Link
export interface NavigationMenuLinkProps extends BaseNavigationMenu.Link.Props {}

export const NavigationMenuLink = ({ className, ...props }: NavigationMenuLinkProps) => {
  const { slots } = useNavigationMenu();
  return (
    <BaseNavigationMenu.Link
      className={cn(slots.link(), className)}
      {...props}
    />
  );
};

// Portal
export interface NavigationMenuPortalProps extends BaseNavigationMenu.Portal.Props {}

export const NavigationMenuPortal = ({ ...props }: NavigationMenuPortalProps) => {
  return <BaseNavigationMenu.Portal {...props} />;
};

// Backdrop
export interface NavigationMenuBackdropProps extends BaseNavigationMenu.Backdrop.Props {}

export const NavigationMenuBackdrop = ({ className, ...props }: NavigationMenuBackdropProps) => {
  const { slots } = useNavigationMenu();
  return (
    <BaseNavigationMenu.Backdrop
      className={cn(slots.backdrop(), className)}
      {...props}
    />
  );
};

// Positioner
export interface NavigationMenuPositionerProps extends BaseNavigationMenu.Positioner.Props {}

export const NavigationMenuPositioner = ({
  className,
  ...props
}: NavigationMenuPositionerProps) => {
  const { slots } = useNavigationMenu();
  return (
    <BaseNavigationMenu.Positioner
      className={cn(slots.positioner(), className)}
      {...props}
    />
  );
};

// Popup
export interface NavigationMenuPopupProps extends BaseNavigationMenu.Popup.Props {}

export const NavigationMenuPopup = ({ className, ...props }: NavigationMenuPopupProps) => {
  const { slots } = useNavigationMenu();
  return (
    <BaseNavigationMenu.Popup
      className={cn(slots.popup(), className)}
      {...props}
    />
  );
};

// Arrow
export interface NavigationMenuArrowProps extends BaseNavigationMenu.Arrow.Props {}

export const NavigationMenuArrow = ({ className, ...props }: NavigationMenuArrowProps) => {
  const { slots } = useNavigationMenu();
  return (
    <BaseNavigationMenu.Arrow
      className={cn(slots.arrow(), className)}
      {...props}
    />
  );
};

// Viewport
export interface NavigationMenuViewportProps extends BaseNavigationMenu.Viewport.Props {}

export const NavigationMenuViewport = ({ className, ...props }: NavigationMenuViewportProps) => {
  const { slots } = useNavigationMenu();
  return (
    <BaseNavigationMenu.Viewport
      className={cn(slots.viewport(), className)}
      {...props}
    />
  );
};
