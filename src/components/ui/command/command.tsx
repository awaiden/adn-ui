"use client";

import "./command.css";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import React, { useState } from "react";
import { cn } from "tailwind-variants";

import { CommandContext, useCommandContext } from "./command.context";
import { commandVariants, type CommandVariants } from "./command.variants";

export type CommandRootProps = CommandVariants &
  React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
    onValueChange?: (value: string) => void;
  };

export const CommandRoot = ({
  children,
  className,
  size,
  value,
  onValueChange,
  ...props
}: CommandRootProps) => {
  const [internalSearch, setInternalSearch] = useState("");
  const search = value !== undefined ? value : internalSearch;
  const setSearch = onValueChange ?? setInternalSearch;

  const slots = commandVariants({ size });

  return (
    <CommandContext.Provider value={{ slots, search, setSearch }}>
      <div className={cn(slots.root(), className)} {...props}>
        {children}
      </div>
    </CommandContext.Provider>
  );
};

export type CommandDialogProps = React.ComponentProps<typeof BaseDialog.Root> & CommandRootProps;

export const CommandDialog = ({
  children,
  open,
  onOpenChange,
  defaultOpen,
  className,
  size,
  ...props
}: CommandDialogProps) => {
  const slots = commandVariants({ size });

  return (
    <BaseDialog.Root open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className={slots.dialogBackdrop()} />
        <BaseDialog.Popup className={cn(slots.dialogPopup(), className)}>
          <CommandRoot size={size} {...props}>
            {children}
          </CommandRoot>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
};

export type CommandInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
  value?: string;
  onValueChange?: (value: string) => void;
};

export const CommandInput = ({ className, value, onValueChange, ...props }: CommandInputProps) => {
  const { slots, search, setSearch } = useCommandContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onValueChange?.(e.target.value);
  };

  return (
    <div className={slots.inputWrapper()}>
      <svg
        className="mr-2.5 h-4 w-4 shrink-0 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        className={cn(slots.input(), className)}
        value={value ?? search}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export type CommandListProps = React.HTMLAttributes<HTMLDivElement>;

export const CommandList = ({ className, ...props }: CommandListProps) => {
  const { slots } = useCommandContext();
  return <div className={cn(slots.list(), className)} {...props} />;
};

export type CommandEmptyProps = React.HTMLAttributes<HTMLDivElement>;

export const CommandEmpty = ({ className, ...props }: CommandEmptyProps) => {
  const { slots } = useCommandContext();
  return <div className={cn(slots.empty(), className)} {...props} />;
};

export type CommandGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  heading?: React.ReactNode;
};

export const CommandGroup = ({ children, className, heading, ...props }: CommandGroupProps) => {
  const { slots } = useCommandContext();
  return (
    <div className={cn(slots.group(), className)} {...props}>
      {heading && <div className={slots.groupHeading()}>{heading}</div>}
      <div className={slots.groupItems()}>{children}</div>
    </div>
  );
};

export type CommandItemProps = React.HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  selected?: boolean;
  onSelect?: () => void;
};

export const CommandItem = ({
  children,
  className,
  disabled,
  selected,
  onSelect,
  onClick,
  ...props
}: CommandItemProps) => {
  const { slots } = useCommandContext();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onSelect?.();
    onClick?.(e);
  };

  return (
    <div
      className={cn(slots.item(), className)}
      data-disabled={disabled ? "true" : undefined}
      data-selected={selected ? "true" : undefined}
      role="option"
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
};

export type CommandShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

export const CommandShortcut = ({ className, ...props }: CommandShortcutProps) => {
  const { slots } = useCommandContext();
  return <span className={cn(slots.shortcut(), className)} {...props} />;
};

export type CommandSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

export const CommandSeparator = ({ className, ...props }: CommandSeparatorProps) => {
  const { slots } = useCommandContext();
  return <div className={cn(slots.separator(), className)} {...props} />;
};
