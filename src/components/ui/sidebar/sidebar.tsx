"use client";

import "./sidebar.css";
import { PanelLeft } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/cn";

import { SidebarContext, useSidebar } from "./sidebar.context";
import { sidebarVariants, type SidebarVariants } from "./sidebar.variants";

export type SidebarProviderProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
  className?: string;
} & React.ComponentProps<"div">;

export const SidebarProvider = ({
  children,
  className,
  defaultOpen = true,
  open: openProp,
  onOpenChange,
  ...props
}: SidebarProviderProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = openProp ?? internalOpen;

  const setOpen = React.useCallback(
    (value: boolean | ((prev: boolean) => boolean)) => {
      const nextOpen = typeof value === "function" ? value(open) : value;
      if (onOpenChange) {
        onOpenChange(nextOpen);
      } else {
        setInternalOpen(nextOpen);
      }
    },
    [open, onOpenChange]
  );

  const toggleSidebar = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, [setOpen]);

  const slots = sidebarVariants();

  return (
    <SidebarContext.Provider value={{ slots, open, setOpen, toggleSidebar }}>
      <div className={cn(slots.provider(), className)} {...props}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

export type SidebarProps = SidebarVariants & React.ComponentProps<"aside">;

export const SidebarRoot = ({ className, children, ...props }: SidebarProps) => {
  const { slots, open } = useSidebar();
  return (
    <aside
      data-collapsed={!open}
      className={cn(slots.root(), className)}
      {...props}
    >
      {children}
    </aside>
  );
};

export type SidebarHeaderProps = React.ComponentProps<"div">;
export const SidebarHeader = ({ className, ...props }: SidebarHeaderProps) => {
  const { slots } = useSidebar();
  return <div className={cn(slots.header(), className)} {...props} />;
};

export type SidebarContentProps = React.ComponentProps<"div">;
export const SidebarContent = ({ className, ...props }: SidebarContentProps) => {
  const { slots } = useSidebar();
  return <div className={cn(slots.content(), className)} {...props} />;
};

export type SidebarFooterProps = React.ComponentProps<"div">;
export const SidebarFooter = ({ className, ...props }: SidebarFooterProps) => {
  const { slots } = useSidebar();
  return <div className={cn(slots.footer(), className)} {...props} />;
};

export type SidebarGroupProps = React.ComponentProps<"div">;
export const SidebarGroup = ({ className, ...props }: SidebarGroupProps) => {
  const { slots } = useSidebar();
  return <div className={cn(slots.group(), className)} {...props} />;
};

export type SidebarGroupLabelProps = React.ComponentProps<"div">;
export const SidebarGroupLabel = ({ className, ...props }: SidebarGroupLabelProps) => {
  const { slots, open } = useSidebar();
  if (!open) return null;
  return <div className={cn(slots.groupLabel(), className)} {...props} />;
};

export type SidebarGroupContentProps = React.ComponentProps<"div">;
export const SidebarGroupContent = ({ className, ...props }: SidebarGroupContentProps) => {
  const { slots } = useSidebar();
  return <div className={cn(slots.groupContent(), className)} {...props} />;
};

export type SidebarMenuProps = React.ComponentProps<"ul">;
export const SidebarMenu = ({ className, ...props }: SidebarMenuProps) => {
  const { slots } = useSidebar();
  return <ul className={cn(slots.menu(), className)} {...props} />;
};

export type SidebarMenuItemProps = React.ComponentProps<"li">;
export const SidebarMenuItem = ({ className, ...props }: SidebarMenuItemProps) => {
  const { slots } = useSidebar();
  return <li className={cn(slots.menuItem(), className)} {...props} />;
};

export type SidebarMenuButtonProps = {
  isActive?: boolean;
} & React.ComponentProps<"button">;

export const SidebarMenuButton = ({
  className,
  isActive,
  children,
  ...props
}: SidebarMenuButtonProps) => {
  const { slots } = useSidebar();
  return (
    <button
      data-active={isActive}
      className={cn(slots.menuButton(), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export type SidebarTriggerProps = React.ComponentProps<"button">;
export const SidebarTrigger = ({ className, children, onClick, ...props }: SidebarTriggerProps) => {
  const { slots, toggleSidebar } = useSidebar();
  return (
    <button
      aria-label="Toggle Sidebar"
      className={cn(slots.trigger(), className)}
      onClick={(e) => {
        onClick?.(e);
        toggleSidebar();
      }}
      {...props}
    >
      {children ?? <PanelLeft />}
    </button>
  );
};
