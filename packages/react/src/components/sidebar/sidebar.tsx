import { LucidePanelLeftClose, LucidePanelLeftOpen } from "lucide-react";
import React, { useMemo } from "react";
import { cn } from "tailwind-variants";

import { SidebarContext } from "./sidebar.context";
import { type SidebarVariants, sidebarVariants } from "./sidebar.variants";
import { useSidebar } from "./use-sidebar";

// Root
export interface SidebarProps extends SidebarVariants, React.ComponentProps<"div"> {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export const SidebarRoot = ({ className, isOpen, onOpenChange, ...props }: SidebarProps) => {
  const [internalIsOpen, setInternalIsOpen] = React.useState(false);

  const isOpenState = isOpen !== undefined ? isOpen : internalIsOpen;
  const handleOpenChange = onOpenChange || setInternalIsOpen;

  const slots = useMemo(() => sidebarVariants({ className }), [className]);

  return (
    <SidebarContext
      value={{
        isOpen: isOpenState,
        onOpenChange: handleOpenChange,
        slots,
      }}
    >
      <div
        className={slots.root()}
        data-open={isOpenState}
        {...props}
      />
    </SidebarContext>
  );
};

// Panel
export interface SidebarPanelProps extends React.ComponentProps<"aside"> {}
export const SidebarPanel = ({ className, ...props }: SidebarPanelProps) => {
  const { slots } = useSidebar();

  return (
    <aside
      className={cn(slots.panel(), className)}
      {...props}
    />
  );
};

// Header
export interface SidebarHeaderProps extends React.ComponentProps<"header"> {}
export const SidebarHeader = ({ className, ...props }: SidebarHeaderProps) => {
  const { slots } = useSidebar();

  return (
    <header
      className={cn(slots.header(), className)}
      {...props}
    />
  );
};

// Content
export interface SidebarContentProps extends React.ComponentProps<"div"> {}
export const SidebarContent = ({ className, ...props }: SidebarContentProps) => {
  const { slots } = useSidebar();

  return (
    <div
      className={cn(slots.content(), className)}
      {...props}
    />
  );
};

// Footer
export interface SidebarFooterProps extends React.ComponentProps<"footer"> {}
export const SidebarFooter = ({ className, ...props }: SidebarFooterProps) => {
  const { slots } = useSidebar();

  return (
    <footer
      className={cn(slots.footer(), className)}
      {...props}
    />
  );
};

// Trigger
export interface SidebarTriggerProps extends React.ComponentProps<"button"> {}
export const SidebarTrigger = ({ className, children, ...props }: SidebarTriggerProps) => {
  const { slots, isOpen, onOpenChange } = useSidebar();

  return (
    <button
      aria-expanded={isOpen}
      className={cn(slots.trigger(), className)}
      onClick={() => onOpenChange(!isOpen)}
      {...props}
    >
      {children ?? (isOpen ? <LucidePanelLeftClose /> : <LucidePanelLeftOpen />)}
    </button>
  );
};

// Outlet
export interface SidebarOutletProps extends React.ComponentProps<"div"> {}
export const SidebarOutlet = ({ className, ...props }: SidebarOutletProps) => {
  const { slots } = useSidebar();

  return (
    <div
      className={cn(slots.outlet(), className)}
      {...props}
    />
  );
};

// Menu
export interface SidebarMenuProps extends React.ComponentProps<"nav"> {}
export const SidebarMenu = ({ className, ...props }: SidebarMenuProps) => {
  const { slots } = useSidebar();

  return (
    <nav
      className={cn(slots.menu(), className)}
      {...props}
    />
  );
};

// Menu Item
export interface SidebarMenuItemProps extends React.ComponentProps<"li"> {}
export const SidebarMenuItem = ({ className, ...props }: SidebarMenuItemProps) => {
  const { slots } = useSidebar();

  return (
    <li
      className={cn(slots.menuItem(), className)}
      {...props}
    />
  );
};

// Menu Label
export interface SidebarMenuLabelProps extends React.ComponentProps<"div"> {}
export const SidebarMenuLabel = ({ className, ...props }: SidebarMenuLabelProps) => {
  const { slots } = useSidebar();

  return (
    <div
      className={cn(slots.menuLabel(), className)}
      {...props}
    />
  );
};
