"use client";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { AutocompleteContext } from "./autocomplete.context";
import { type AutocompleteVariants, autocompleteVariants } from "./autocomplete.variants";
import { useAutocomplete } from "./use-autocomplete";

// Root
export interface AutocompleteProps
  extends AutocompleteVariants, BaseAutocomplete.Root.Props<unknown> {}

export const AutocompleteRoot = ({ ...props }: AutocompleteProps) => {
  const slots = useMemo(() => autocompleteVariants(), []);

  return (
    <AutocompleteContext value={{ slots }}>
      <BaseAutocomplete.Root {...props} />
    </AutocompleteContext>
  );
};

export interface AutocompleteTriggerProps extends BaseAutocomplete.Trigger.Props {}

// Trigger
export const AutocompleteTrigger = ({ className, ...props }: AutocompleteTriggerProps) => {
  const { slots } = useAutocomplete();

  return <BaseAutocomplete.Trigger className={cn(slots.trigger(), className)} {...props} />;
};

// Input
export interface AutocompleteInputProps extends BaseAutocomplete.Input.Props {}
export const AutocompleteInput = ({ className, ...props }: AutocompleteInputProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Input className={cn(slots.input(), className)} {...props} />;
};

// Icon
export interface AutocompleteIconProps extends BaseAutocomplete.Icon.Props {}
export const AutocompleteIcon = ({ className, ...props }: AutocompleteIconProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Icon className={cn(slots.icon(), className)} {...props} />;
};

// Clear
export interface AutocompleteClearProps extends BaseAutocomplete.Clear.Props {}
export const AutocompleteClear = ({ className, ...props }: AutocompleteClearProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Clear className={cn(slots.clear(), className)} {...props} />;
};

// Value
export interface AutocompleteValueProps extends BaseAutocomplete.Value.Props {}
export const AutocompleteValue = ({ ...props }: AutocompleteValueProps) => {
  return <BaseAutocomplete.Value {...props} />;
};

// Portal
export interface AutocompletePortalProps extends BaseAutocomplete.Portal.Props {}
export const AutocompletePortal = ({ className, ...props }: AutocompletePortalProps) => {
  const { slots } = useAutocomplete();

  return <BaseAutocomplete.Portal className={cn(slots.portal(), className)} {...props} />;
};

// Backdrop
export interface AutocompleteBackdropProps extends BaseAutocomplete.Backdrop.Props {}
export const AutocompleteBackdrop = ({ className, ...props }: AutocompleteBackdropProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Backdrop className={cn(slots.backdrop(), className)} {...props} />;
};

// Positioner
export interface AutocompletePositionerProps extends BaseAutocomplete.Positioner.Props {}
export const AutocompletePositioner = ({ className, ...props }: AutocompletePositionerProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Positioner className={cn(slots.positioner(), className)} {...props} />;
};

// Popup
export interface AutocompletePopupProps extends BaseAutocomplete.Popup.Props {}
export const AutocompletePopup = ({ className, ...props }: AutocompletePopupProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Popup className={cn(slots.popup(), className)} {...props} />;
};

// Arrow
export interface AutocompleteArrowProps extends BaseAutocomplete.Arrow.Props {}
export const AutocompleteArrow = ({ className, ...props }: AutocompleteArrowProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Arrow className={cn(slots.arrow(), className)} {...props} />;
};

// Status
export interface AutocompleteStatusProps extends BaseAutocomplete.Status.Props {}
export const AutocompleteStatus = ({ className, ...props }: AutocompleteStatusProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Status className={cn(slots.status(), className)} {...props} />;
};

// Empty
export interface AutocompleteEmptyProps extends BaseAutocomplete.Empty.Props {}
export const AutocompleteEmpty = ({ className, ...props }: AutocompleteEmptyProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Empty className={cn(slots.empty(), className)} {...props} />;
};

// List
export interface AutocompleteListProps extends BaseAutocomplete.List.Props {}
export const AutocompleteList = ({ className, ...props }: AutocompleteListProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.List className={cn(slots.list(), className)} {...props} />;
};

// Row
export interface AutocompleteRowProps extends BaseAutocomplete.Row.Props {}
export const AutocompleteRow = ({ className, ...props }: AutocompleteRowProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Row className={cn(slots.row(), className)} {...props} />;
};

// Item
export interface AutocompleteItemProps extends BaseAutocomplete.Item.Props {}
export const AutocompleteItem = ({ className, ...props }: AutocompleteItemProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Item className={cn(slots.item(), className)} {...props} />;
};

// Separator
export interface AutocompleteSeparatorProps extends BaseAutocomplete.Separator.Props {}
export const AutocompleteSeparator = ({ className, ...props }: AutocompleteSeparatorProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Separator className={cn(slots.separator(), className)} {...props} />;
};

// Group
export interface AutocompleteGroupProps extends BaseAutocomplete.Group.Props {}
export const AutocompleteGroup = ({ className, ...props }: AutocompleteGroupProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.Group className={cn(slots.group(), className)} {...props} />;
};

// GroupLabel
export interface AutocompleteGroupLabelProps extends BaseAutocomplete.GroupLabel.Props {}
export const AutocompleteGroupLabel = ({ className, ...props }: AutocompleteGroupLabelProps) => {
  const { slots } = useAutocomplete();
  return <BaseAutocomplete.GroupLabel className={cn(slots.groupLabel(), className)} {...props} />;
};
