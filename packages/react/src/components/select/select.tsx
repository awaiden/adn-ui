"use client";

import { Select as BaseSelect } from "@base-ui/react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { SelectContext } from "./select.context";
import { type SelectVariants, selectVariants } from "./select.variants";
import { useSelect } from "./use-select";

// Root
export interface SelectProps extends SelectVariants, BaseSelect.Root.Props<unknown, boolean> {}

export const SelectRoot = ({ ...props }: SelectProps) => {
  const slots = useMemo(() => selectVariants(), []);

  return (
    <SelectContext.Provider value={{ slots }}>
      <BaseSelect.Root {...props} />
    </SelectContext.Provider>
  );
};

// Trigger
export interface SelectTriggerProps extends BaseSelect.Trigger.Props {}

export const SelectTrigger = ({ className, ...props }: SelectTriggerProps) => {
  const { slots } = useSelect();

  return <BaseSelect.Trigger className={cn(slots.trigger(), className)} {...props} />;
};

export interface SelectIconProps extends BaseSelect.Icon.Props {}

// Icon
export const SelectIcon = ({ className, children, ...props }: SelectIconProps) => {
  const { slots } = useSelect();
  return (
    <BaseSelect.Icon className={cn(slots.icon(), className)} {...props}>
      {children || <ChevronsUpDown />}
    </BaseSelect.Icon>
  );
};

// Value
export interface SelectValueProps extends BaseSelect.Value.Props {}

export const SelectValue = ({ className, ...props }: SelectValueProps) => {
  const { slots } = useSelect();
  return <BaseSelect.Value className={cn(slots.value(), className)} {...props} />;
};

// Portal
export interface SelectPortalProps extends BaseSelect.Portal.Props {}

export const SelectPortal = ({ ...props }: SelectPortalProps) => {
  return <BaseSelect.Portal {...props} />;
};

// Backdrop
export interface SelectBackdropProps extends BaseSelect.Backdrop.Props {}

export const SelectBackdrop = ({ className, ...props }: SelectBackdropProps) => {
  const { slots } = useSelect();
  return <BaseSelect.Backdrop className={cn(slots.backdrop(), className)} {...props} />;
};

// Positioner
export interface SelectPositionerProps extends BaseSelect.Positioner.Props {}

export const SelectPositioner = ({ className, ...props }: SelectPositionerProps) => {
  const { slots } = useSelect();
  return <BaseSelect.Positioner className={cn(slots.positioner(), className)} {...props} />;
};

// Popup
export interface SelectPopupProps extends BaseSelect.Popup.Props {}

export const SelectPopup = ({ className, ...props }: SelectPopupProps) => {
  const { slots } = useSelect();
  return <BaseSelect.Popup className={cn(slots.popup(), className)} {...props} />;
};

// Arrow
export interface SelectArrowProps extends BaseSelect.Arrow.Props {}

export const SelectArrow = ({ className, ...props }: SelectArrowProps) => {
  const { slots } = useSelect();
  return <BaseSelect.Arrow className={cn(slots.arrow(), className)} {...props} />;
};

// List
export interface SelectListProps extends BaseSelect.List.Props {}

export const SelectList = ({ className, ...props }: SelectListProps) => {
  const { slots } = useSelect();
  return <BaseSelect.List className={cn(slots.list(), className)} {...props} />;
};

// ItemIndicator
export interface SelectItemIndicatorProps extends BaseSelect.ItemIndicator.Props {}

export const SelectItemIndicator = ({
  className,
  children,
  ...props
}: SelectItemIndicatorProps) => {
  const { slots } = useSelect();
  return (
    <BaseSelect.ItemIndicator className={cn(slots.itemIndicator(), className)} {...props}>
      {children || <Check />}
    </BaseSelect.ItemIndicator>
  );
};

// ItemText
export interface SelectItemTextProps extends BaseSelect.ItemText.Props {}

export const SelectItemText = ({ className, ...props }: SelectItemTextProps) => {
  return <BaseSelect.ItemText className={className} {...props} />;
};

// Item
export interface SelectItemProps extends BaseSelect.Item.Props {}

export const SelectItem = ({ className, ...props }: SelectItemProps) => {
  const { slots } = useSelect();
  return <BaseSelect.Item className={cn(slots.item(), className)} {...props} />;
};

// Group
export interface SelectGroupProps extends BaseSelect.Group.Props {}

export const SelectGroup = ({ className, ...props }: SelectGroupProps) => {
  const { slots } = useSelect();
  return <BaseSelect.Group className={cn(slots.group(), className)} {...props} />;
};

// GroupLabel
export interface SelectGroupLabelProps extends BaseSelect.GroupLabel.Props {}

export const SelectGroupLabel = ({ className, ...props }: SelectGroupLabelProps) => {
  const { slots } = useSelect();
  return <BaseSelect.GroupLabel className={cn(slots.groupLabel(), className)} {...props} />;
};

// Separator
export interface SelectSeparatorProps extends BaseSelect.Separator.Props {}

export const SelectSeparator = ({ className, ...props }: SelectSeparatorProps) => {
  const { slots } = useSelect();
  return <BaseSelect.Separator className={cn(slots.separator(), className)} {...props} />;
};
