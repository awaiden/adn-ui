"use client";

import "./context-menu.css";

import type React from "react";

import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import { cn } from "tailwind-variants";

import { ContextMenuContext, useContextMenuContext } from "./context-menu.context";
import { contextMenuVariants, type ContextMenuVariants } from "./context-menu.variants";

export type ContextMenuProps = ContextMenuVariants &
  React.ComponentProps<typeof BaseContextMenu.Root>;

export const ContextMenuRoot = ({ children, size, ...props }: ContextMenuProps) => {
  const slots = contextMenuVariants({ size });

  return (
    <ContextMenuContext.Provider value={{ slots }}>
      <BaseContextMenu.Root {...props}>{children}</BaseContextMenu.Root>
    </ContextMenuContext.Provider>
  );
};

export type ContextMenuTriggerProps = React.ComponentProps<typeof BaseContextMenu.Trigger>;

export const ContextMenuTrigger = ({ className, ...props }: ContextMenuTriggerProps) => {
  const { slots } = useContextMenuContext();
  return <BaseContextMenu.Trigger className={cn(slots.trigger(), className)} {...props} />;
};

export type ContextMenuPortalProps = React.ComponentProps<typeof BaseContextMenu.Portal>;

export const ContextMenuPortal = (props: ContextMenuPortalProps) => {
  return <BaseContextMenu.Portal {...props} />;
};

export type ContextMenuPositionerProps = React.ComponentProps<typeof BaseContextMenu.Positioner>;

export const ContextMenuPositioner = ({ className, ...props }: ContextMenuPositionerProps) => {
  const { slots } = useContextMenuContext();
  return <BaseContextMenu.Positioner className={cn(slots.positioner(), className)} {...props} />;
};

export type ContextMenuPopupProps = React.ComponentProps<typeof BaseContextMenu.Popup>;

export const ContextMenuPopup = ({ className, ...props }: ContextMenuPopupProps) => {
  const { slots } = useContextMenuContext();
  return <BaseContextMenu.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type ContextMenuItemProps = React.ComponentProps<typeof BaseContextMenu.Item>;

export const ContextMenuItem = ({ className, ...props }: ContextMenuItemProps) => {
  const { slots } = useContextMenuContext();
  return <BaseContextMenu.Item className={cn(slots.item(), className)} {...props} />;
};

export type ContextMenuSeparatorProps = React.ComponentProps<typeof BaseContextMenu.Separator>;

export const ContextMenuSeparator = ({ className, ...props }: ContextMenuSeparatorProps) => {
  const { slots } = useContextMenuContext();
  return <BaseContextMenu.Separator className={cn(slots.separator(), className)} {...props} />;
};

export type ContextMenuSubmenuRootProps = React.ComponentProps<typeof BaseContextMenu.SubmenuRoot>;

export const ContextMenuSubmenuRoot = (props: ContextMenuSubmenuRootProps) => {
  return <BaseContextMenu.SubmenuRoot {...props} />;
};

export type ContextMenuSubmenuTriggerProps = React.ComponentProps<
  typeof BaseContextMenu.SubmenuTrigger
>;

export const ContextMenuSubmenuTrigger = ({
  children,
  className,
  ...props
}: ContextMenuSubmenuTriggerProps) => {
  const { slots } = useContextMenuContext();
  return (
    <BaseContextMenu.SubmenuTrigger className={cn(slots.submenuTrigger(), className)} {...props}>
      {children}
      <svg
        className="h-4 w-4 shrink-0 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </BaseContextMenu.SubmenuTrigger>
  );
};

export type ContextMenuGroupProps = React.ComponentProps<typeof BaseContextMenu.Group>;

export const ContextMenuGroup = ({ className, ...props }: ContextMenuGroupProps) => {
  const { slots } = useContextMenuContext();
  return <BaseContextMenu.Group className={cn(slots.group(), className)} {...props} />;
};

export type ContextMenuGroupLabelProps = React.ComponentProps<typeof BaseContextMenu.GroupLabel>;

export const ContextMenuGroupLabel = ({ className, ...props }: ContextMenuGroupLabelProps) => {
  const { slots } = useContextMenuContext();
  return <BaseContextMenu.GroupLabel className={cn(slots.groupLabel(), className)} {...props} />;
};

export type ContextMenuCheckboxItemProps = React.ComponentProps<
  typeof BaseContextMenu.CheckboxItem
>;

export const ContextMenuCheckboxItem = ({ className, ...props }: ContextMenuCheckboxItemProps) => {
  const { slots } = useContextMenuContext();
  return (
    <BaseContextMenu.CheckboxItem className={cn(slots.checkboxItem(), className)} {...props} />
  );
};

export type ContextMenuCheckboxItemIndicatorProps = React.ComponentProps<
  typeof BaseContextMenu.CheckboxItemIndicator
>;

export const ContextMenuCheckboxItemIndicator = ({
  children,
  className,
  ...props
}: ContextMenuCheckboxItemIndicatorProps) => {
  const { slots } = useContextMenuContext();
  return (
    <BaseContextMenu.CheckboxItemIndicator
      className={cn(slots.checkboxItemIndicator(), className)}
      {...props}
    >
      {children ?? (
        <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </BaseContextMenu.CheckboxItemIndicator>
  );
};

export type ContextMenuRadioGroupProps = React.ComponentProps<typeof BaseContextMenu.RadioGroup>;

export const ContextMenuRadioGroup = ({ className, ...props }: ContextMenuRadioGroupProps) => {
  const { slots } = useContextMenuContext();
  return <BaseContextMenu.RadioGroup className={cn(slots.radioGroup(), className)} {...props} />;
};

export type ContextMenuRadioItemProps = React.ComponentProps<typeof BaseContextMenu.RadioItem>;

export const ContextMenuRadioItem = ({ className, ...props }: ContextMenuRadioItemProps) => {
  const { slots } = useContextMenuContext();
  return <BaseContextMenu.RadioItem className={cn(slots.radioItem(), className)} {...props} />;
};

export type ContextMenuRadioItemIndicatorProps = React.ComponentProps<
  typeof BaseContextMenu.RadioItemIndicator
>;

export const ContextMenuRadioItemIndicator = ({
  children,
  className,
  ...props
}: ContextMenuRadioItemIndicatorProps) => {
  const { slots } = useContextMenuContext();
  return (
    <BaseContextMenu.RadioItemIndicator
      className={cn(slots.radioItemIndicator(), className)}
      {...props}
    >
      {children ?? (
        <svg className="h-2 w-2 fill-current" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="4" />
        </svg>
      )}
    </BaseContextMenu.RadioItemIndicator>
  );
};
