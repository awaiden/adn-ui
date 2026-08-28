"use client";

import "./dropdown-menu.css";
import { Menu as BaseDropdownMenu } from "@base-ui/react/menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/cn";

import { DropdownMenuContext, useDropdownMenuContext } from "./dropdown-menu.context";
import { dropdownMenuVariants, type DropdownMenuVariants } from "./dropdown-menu.variants";

export type DropdownMenuProps = DropdownMenuVariants & React.ComponentProps<typeof BaseDropdownMenu.Root>;

export const DropdownMenuRoot = ({ children, size, ...props }: DropdownMenuProps) => {
  const slots = dropdownMenuVariants({ size });

  return (
    <DropdownMenuContext.Provider value={{ slots }}>
      <BaseDropdownMenu.Root {...props}>{children}</BaseDropdownMenu.Root>
    </DropdownMenuContext.Provider>
  );
};

export type DropdownMenuTriggerProps = React.ComponentProps<typeof BaseDropdownMenu.Trigger>;

export const DropdownMenuTrigger = ({ className, ...props }: DropdownMenuTriggerProps) => {
  const { slots } = useDropdownMenuContext();
  return <BaseDropdownMenu.Trigger className={cn(slots.trigger(), className)} {...props} />;
};

export type DropdownMenuPortalProps = React.ComponentProps<typeof BaseDropdownMenu.Portal>;

export const DropdownMenuPortal = (props: DropdownMenuPortalProps) => {
  return <BaseDropdownMenu.Portal {...props} />;
};

export type DropdownMenuPositionerProps = React.ComponentProps<typeof BaseDropdownMenu.Positioner>;

export const DropdownMenuPositioner = ({ className, sideOffset = 4, ...props }: DropdownMenuPositionerProps) => {
  const { slots } = useDropdownMenuContext();
  return (
    <BaseDropdownMenu.Positioner
      className={cn(slots.positioner(), className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

export type DropdownMenuPopupProps = React.ComponentProps<typeof BaseDropdownMenu.Popup>;

export const DropdownMenuPopup = ({ className, ...props }: DropdownMenuPopupProps) => {
  const { slots } = useDropdownMenuContext();
  return <BaseDropdownMenu.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type DropdownMenuItemProps = React.ComponentProps<typeof BaseDropdownMenu.Item>;

export const DropdownMenuItem = ({ className, ...props }: DropdownMenuItemProps) => {
  const { slots } = useDropdownMenuContext();
  return <BaseDropdownMenu.Item className={cn(slots.item(), className)} {...props} />;
};

export type DropdownMenuSeparatorProps = React.ComponentProps<typeof BaseDropdownMenu.Separator>;

export const DropdownMenuSeparator = ({ className, ...props }: DropdownMenuSeparatorProps) => {
  const { slots } = useDropdownMenuContext();
  return <BaseDropdownMenu.Separator className={cn(slots.separator(), className)} {...props} />;
};

export type DropdownMenuSubmenuRootProps = React.ComponentProps<typeof BaseDropdownMenu.SubmenuRoot>;

export const DropdownMenuSubmenuRoot = (props: DropdownMenuSubmenuRootProps) => {
  return <BaseDropdownMenu.SubmenuRoot {...props} />;
};

export type DropdownMenuSubmenuTriggerProps = React.ComponentProps<typeof BaseDropdownMenu.SubmenuTrigger>;

export const DropdownMenuSubmenuTrigger = ({ children, className, ...props }: DropdownMenuSubmenuTriggerProps) => {
  const { slots } = useDropdownMenuContext();
  return (
    <BaseDropdownMenu.SubmenuTrigger className={cn(slots.submenuTrigger(), className)} {...props}>
      {children}
      <ChevronRight />
    </BaseDropdownMenu.SubmenuTrigger>
  );
};

export type DropdownMenuGroupProps = React.ComponentProps<typeof BaseDropdownMenu.Group>;

export const DropdownMenuGroup = ({ className, ...props }: DropdownMenuGroupProps) => {
  const { slots } = useDropdownMenuContext();
  return <BaseDropdownMenu.Group className={cn(slots.group(), className)} {...props} />;
};

export type DropdownMenuGroupLabelProps = React.ComponentProps<typeof BaseDropdownMenu.GroupLabel>;

export const DropdownMenuGroupLabel = ({ className, ...props }: DropdownMenuGroupLabelProps) => {
  const { slots } = useDropdownMenuContext();
  return <BaseDropdownMenu.GroupLabel className={cn(slots.groupLabel(), className)} {...props} />;
};

export type DropdownMenuCheckboxItemProps = React.ComponentProps<typeof BaseDropdownMenu.CheckboxItem>;

export const DropdownMenuCheckboxItem = ({ className, ...props }: DropdownMenuCheckboxItemProps) => {
  const { slots } = useDropdownMenuContext();
  return <BaseDropdownMenu.CheckboxItem className={cn(slots.checkboxItem(), className)} {...props} />;
};

export type DropdownMenuCheckboxItemIndicatorProps = React.ComponentProps<
  typeof BaseDropdownMenu.CheckboxItemIndicator
>;

export const DropdownMenuCheckboxItemIndicator = ({
  children,
  className,
  ...props
}: DropdownMenuCheckboxItemIndicatorProps) => {
  const { slots } = useDropdownMenuContext();
  return (
    <BaseDropdownMenu.CheckboxItemIndicator
      className={cn(slots.checkboxItemIndicator(), className)}
      {...props}
    >
      {children ?? <Check />}
    </BaseDropdownMenu.CheckboxItemIndicator>
  );
};

export type DropdownMenuRadioGroupProps = React.ComponentProps<typeof BaseDropdownMenu.RadioGroup>;

export const DropdownMenuRadioGroup = ({ className, ...props }: DropdownMenuRadioGroupProps) => {
  const { slots } = useDropdownMenuContext();
  return <BaseDropdownMenu.RadioGroup className={cn(slots.radioGroup(), className)} {...props} />;
};

export type DropdownMenuRadioItemProps = React.ComponentProps<typeof BaseDropdownMenu.RadioItem>;

export const DropdownMenuRadioItem = ({ className, ...props }: DropdownMenuRadioItemProps) => {
  const { slots } = useDropdownMenuContext();
  return <BaseDropdownMenu.RadioItem className={cn(slots.radioItem(), className)} {...props} />;
};

export type DropdownMenuRadioItemIndicatorProps = React.ComponentProps<typeof BaseDropdownMenu.RadioItemIndicator>;

export const DropdownMenuRadioItemIndicator = ({
  children,
  className,
  ...props
}: DropdownMenuRadioItemIndicatorProps) => {
  const { slots } = useDropdownMenuContext();
  return (
    <BaseDropdownMenu.RadioItemIndicator className={cn(slots.radioItemIndicator(), className)} {...props}>
      {children ?? <Circle />}
    </BaseDropdownMenu.RadioItemIndicator>
  );
};
