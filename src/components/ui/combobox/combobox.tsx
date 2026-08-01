"use client";

import "./combobox.css";

import type React from "react";

import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { cn } from "tailwind-variants";

import { ComboboxContext, useComboboxContext } from "./combobox.context";
import { comboboxVariants, type ComboboxVariants } from "./combobox.variants";

export type ComboboxProps<
  Item = any,
  Multiple extends boolean | undefined = false,
> = ComboboxVariants & React.ComponentProps<typeof BaseCombobox.Root<Item, Multiple>>;

export function ComboboxRoot<Item = any, Multiple extends boolean | undefined = false>({
  children,
  size,
  variant,
  ...props
}: ComboboxProps<Item, Multiple>) {
  const slots = comboboxVariants({ size, variant });

  return (
    <ComboboxContext.Provider value={{ slots }}>
      <BaseCombobox.Root {...props}>{children}</BaseCombobox.Root>
    </ComboboxContext.Provider>
  );
}

export type ComboboxInputGroupProps = React.ComponentProps<typeof BaseCombobox.InputGroup>;

export const ComboboxInputGroup = ({ className, ...props }: ComboboxInputGroupProps) => {
  const { slots } = useComboboxContext();
  return <BaseCombobox.InputGroup className={cn(slots.inputGroup(), className)} {...props} />;
};

export type ComboboxInputProps = React.ComponentProps<typeof BaseCombobox.Input>;

export const ComboboxInput = ({
  className,
  children: _children,
  dangerouslySetInnerHTML: _dangerouslySetInnerHTML,
  ...props
}: ComboboxInputProps & { children?: React.ReactNode; dangerouslySetInnerHTML?: any }) => {
  const { slots } = useComboboxContext();
  return <BaseCombobox.Input className={cn(slots.input(), className)} {...props} />;
};

export type ComboboxTriggerProps = React.ComponentProps<typeof BaseCombobox.Trigger>;

export const ComboboxTrigger = ({ children, className, ...props }: ComboboxTriggerProps) => {
  const { slots } = useComboboxContext();
  return (
    <BaseCombobox.Trigger className={cn(slots.trigger(), className)} {...props}>
      {children ?? (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
          <path d="M12 6H4l4 4.5z" />
        </svg>
      )}
    </BaseCombobox.Trigger>
  );
};

export type ComboboxClearProps = React.ComponentProps<typeof BaseCombobox.Clear>;

export const ComboboxClear = ({ children, className, ...props }: ComboboxClearProps) => {
  const { slots } = useComboboxContext();
  return (
    <BaseCombobox.Clear className={cn(slots.clear(), className)} {...props}>
      {children ?? (
        <svg className="h-3.5 w-3.5 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      )}
    </BaseCombobox.Clear>
  );
};

export type ComboboxChipsProps = React.ComponentProps<typeof BaseCombobox.Chips>;

export const ComboboxChips = ({ className, ...props }: ComboboxChipsProps) => {
  const { slots } = useComboboxContext();
  return <BaseCombobox.Chips className={cn(slots.chips(), className)} {...props} />;
};

export type ComboboxChipProps = React.ComponentProps<typeof BaseCombobox.Chip>;

export const ComboboxChip = ({ className, ...props }: ComboboxChipProps) => {
  const { slots } = useComboboxContext();
  return <BaseCombobox.Chip className={cn(slots.chip(), className)} {...props} />;
};

export type ComboboxChipRemoveProps = React.ComponentProps<typeof BaseCombobox.ChipRemove>;

export const ComboboxChipRemove = ({ children, className, ...props }: ComboboxChipRemoveProps) => {
  const { slots } = useComboboxContext();
  return (
    <BaseCombobox.ChipRemove className={cn(slots.chipRemove(), className)} {...props}>
      {children ?? (
        <svg className="h-3 w-3 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      )}
    </BaseCombobox.ChipRemove>
  );
};

export type ComboboxValueProps = React.ComponentProps<typeof BaseCombobox.Value>;

export const ComboboxValue = (props: ComboboxValueProps) => {
  return <BaseCombobox.Value {...props} />;
};

export type ComboboxPortalProps = React.ComponentProps<typeof BaseCombobox.Portal>;

export const ComboboxPortal = (props: ComboboxPortalProps) => {
  return <BaseCombobox.Portal {...props} />;
};

export type ComboboxPositionerProps = React.ComponentProps<typeof BaseCombobox.Positioner>;

export const ComboboxPositioner = ({
  className,
  sideOffset = 4,
  ...props
}: ComboboxPositionerProps) => {
  const { slots } = useComboboxContext();
  return (
    <BaseCombobox.Positioner
      className={cn(slots.positioner(), className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

export type ComboboxPopupProps = React.ComponentProps<typeof BaseCombobox.Popup>;

export const ComboboxPopup = ({ className, ...props }: ComboboxPopupProps) => {
  const { slots } = useComboboxContext();
  return <BaseCombobox.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type ComboboxListProps = React.ComponentProps<typeof BaseCombobox.List>;

export function ComboboxList({ className, ...props }: ComboboxListProps) {
  const { slots } = useComboboxContext();
  return <BaseCombobox.List className={cn(slots.list(), className)} {...props} />;
}

export type ComboboxItemProps = React.ComponentProps<typeof BaseCombobox.Item>;

export function ComboboxItem({ className, ...props }: ComboboxItemProps) {
  const { slots } = useComboboxContext();
  return <BaseCombobox.Item className={cn(slots.item(), className)} {...props} />;
}

export type ComboboxItemIndicatorProps = React.ComponentProps<typeof BaseCombobox.ItemIndicator>;

export const ComboboxItemIndicator = ({
  children,
  className,
  ...props
}: ComboboxItemIndicatorProps) => {
  const { slots } = useComboboxContext();
  return (
    <BaseCombobox.ItemIndicator className={cn(slots.itemIndicator(), className)} {...props}>
      {children ?? (
        <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </BaseCombobox.ItemIndicator>
  );
};

export type ComboboxEmptyProps = React.ComponentProps<typeof BaseCombobox.Empty>;

export const ComboboxEmpty = ({ className, ...props }: ComboboxEmptyProps) => {
  const { slots } = useComboboxContext();
  return <BaseCombobox.Empty className={cn(slots.empty(), className)} {...props} />;
};
