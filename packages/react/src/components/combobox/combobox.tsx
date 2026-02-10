import { Combobox as BaseCombobox } from "@base-ui/react";
import { Check, ChevronDown, X } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { useFieldOptional } from "../field";
import { ComboboxContext } from "./combobox.context";
import { type ComboboxVariants, comboboxVariants } from "./combobox.variants";
import { useCombobox } from "./use-combobox";

// Root
export interface ComboboxProps extends ComboboxVariants, BaseCombobox.Root.Props<unknown> {}

export const ComboboxRoot = ({ ...props }: ComboboxProps) => {
  const field = useFieldOptional();

  if (!field) {
    return <PureComboboxRoot {...props} />;
  }

  const { name, isRequired, error } = field;

  return (
    <PureComboboxRoot
      id={props.id ?? name}
      name={props.name ?? name}
      aria-invalid={Boolean(error)}
      aria-describedby={`${name}-error`}
      data-invalid={Boolean(error)}
      data-required={isRequired}
      required={props.required ?? isRequired}
      {...props}
    />
  );
};

export const PureComboboxRoot = ({ ...props }: ComboboxProps) => {
  const slots = useMemo(() => comboboxVariants(), []);

  return (
    <ComboboxContext.Provider value={{ slots }}>
      <BaseCombobox.Root {...props} />
    </ComboboxContext.Provider>
  );
};

export interface ComboboxInputProps extends BaseCombobox.Input.Props {}

export const ComboboxInput = ({ className, ...props }: ComboboxInputProps) => {
  const { slots } = useCombobox();

  return (
    <BaseCombobox.Input
      className={cn(slots.input(), className)}
      {...props}
    />
  );
};

// Trigger
export interface ComboboxTriggerProps extends BaseCombobox.Trigger.Props {}

export const ComboboxTrigger = ({ className, children, ...props }: ComboboxTriggerProps) => {
  const { slots } = useCombobox();

  return (
    <BaseCombobox.Trigger
      className={cn(slots.trigger(), className)}
      {...props}
    >
      {children}
      <BaseCombobox.Icon className={slots.icon()}>
        <ChevronDown />
      </BaseCombobox.Icon>
    </BaseCombobox.Trigger>
  );
};

// Value
export interface ComboboxValueProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ComboboxValue = ({ ...props }: ComboboxValueProps) => {
  const { slots } = useCombobox();
  return (
    <div
      className={cn(slots.value())}
      {...props}
    />
  );
};

// Clear
export interface ComboboxClearProps extends BaseCombobox.Clear.Props {}

export const ComboboxClear = ({ className, ...props }: ComboboxClearProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Clear
      className={cn(slots.clear(), className)}
      {...props}
    >
      <X className='h-4 w-4' />
    </BaseCombobox.Clear>
  );
};

// Chips
export interface ComboboxChipsProps extends BaseCombobox.Chips.Props {}

export const ComboboxChips = ({ className, ...props }: ComboboxChipsProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Chips
      className={cn(slots.chips(), className)}
      {...props}
    />
  );
};

// Chip
export interface ComboboxChipProps extends BaseCombobox.Chip.Props {}

export const ComboboxChip = ({ className, children, ...props }: ComboboxChipProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Chip
      className={cn(slots.chip(), className)}
      {...props}
    >
      {children}
      <BaseCombobox.ChipRemove className={slots.chipRemove()} />
    </BaseCombobox.Chip>
  );
};

// ChipRemove
export interface ComboboxChipRemoveProps extends BaseCombobox.ChipRemove.Props {}

export const ComboboxChipRemove = ({ className, ...props }: ComboboxChipRemoveProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.ChipRemove
      className={cn(slots.chipRemove(), className)}
      {...props}
    />
  );
};

// Portal
export interface ComboboxPortalProps extends BaseCombobox.Portal.Props {}

export const ComboboxPortal = ({ ...props }: ComboboxPortalProps) => {
  return <BaseCombobox.Portal {...props} />;
};

// Backdrop
export interface ComboboxBackdropProps extends BaseCombobox.Backdrop.Props {}

export const ComboboxBackdrop = ({ className, ...props }: ComboboxBackdropProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Backdrop
      className={cn(slots.backdrop(), className)}
      {...props}
    />
  );
};

// Positioner
export interface ComboboxPositionerProps extends BaseCombobox.Positioner.Props {}

export const ComboboxPositioner = ({ className, ...props }: ComboboxPositionerProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Positioner
      className={cn(slots.positioner(), className)}
      {...props}
    />
  );
};

// Popup
export interface ComboboxPopupProps extends BaseCombobox.Popup.Props {}

export const ComboboxPopup = ({ className, ...props }: ComboboxPopupProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Popup
      className={cn(slots.popup(), className)}
      {...props}
    />
  );
};

// Arrow
export interface ComboboxArrowProps extends BaseCombobox.Arrow.Props {}

export const ComboboxArrow = ({ className, ...props }: ComboboxArrowProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Arrow
      className={cn(slots.arrow(), className)}
      {...props}
    />
  );
};

// Status
export interface ComboboxStatusProps extends BaseCombobox.Status.Props {}

export const ComboboxStatus = ({ className, ...props }: ComboboxStatusProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Status
      className={cn(slots.status(), className)}
      {...props}
    />
  );
};

// Empty
export interface ComboboxEmptyProps extends BaseCombobox.Empty.Props {}

export const ComboboxEmpty = ({ className, ...props }: ComboboxEmptyProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Empty
      className={cn(slots.empty(), className)}
      {...props}
    />
  );
};

// List
export interface ComboboxListProps extends BaseCombobox.List.Props {}

export const ComboboxList = ({ className, ...props }: ComboboxListProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.List
      className={cn(slots.list(), className)}
      {...props}
    />
  );
};

// Row
export interface ComboboxRowProps extends BaseCombobox.Row.Props {}

export const ComboboxRow = ({ className, ...props }: ComboboxRowProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Row
      className={cn(slots.row(), className)}
      {...props}
    />
  );
};

// ItemIndicator
export interface ComboboxItemIndicatorProps extends BaseCombobox.ItemIndicator.Props {}

export const ComboboxItemIndicator = ({
  className,
  children,
  ...props
}: ComboboxItemIndicatorProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.ItemIndicator
      className={cn(slots.itemIndicator(), className)}
      {...props}
    >
      {children ?? <Check />}
    </BaseCombobox.ItemIndicator>
  );
};

// Item
export interface ComboboxItemProps extends BaseCombobox.Item.Props {}

export const ComboboxItem = ({ className, children, ...props }: ComboboxItemProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Item
      className={cn(slots.item(), className)}
      {...props}
    >
      <ComboboxItemIndicator />
      {children}
    </BaseCombobox.Item>
  );
};

// Separator
export interface ComboboxSeparatorProps extends BaseCombobox.Separator.Props {}

export const ComboboxSeparator = ({ className, ...props }: ComboboxSeparatorProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Separator
      className={cn(slots.separator(), className)}
      {...props}
    />
  );
};

// Group
export interface ComboboxGroupProps extends BaseCombobox.Group.Props {}

export const ComboboxGroup = ({ className, ...props }: ComboboxGroupProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.Group
      className={cn(slots.group(), className)}
      {...props}
    />
  );
};

// GroupLabel
export interface ComboboxGroupLabelProps extends BaseCombobox.GroupLabel.Props {}

export const ComboboxGroupLabel = ({ className, ...props }: ComboboxGroupLabelProps) => {
  const { slots } = useCombobox();
  return (
    <BaseCombobox.GroupLabel
      className={cn(slots.groupLabel(), className)}
      {...props}
    />
  );
};
