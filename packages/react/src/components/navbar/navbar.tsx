"use client";

import { LucideMenu, LucideX } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { cn } from "tailwind-variants";

import { NavbarContext } from "./navbar.context";
import { type NavbarVariants, navbarVariants } from "./navbar.variants";
import { useNavbar } from "./use-navbar";

export interface NavbarProps extends NavbarVariants, React.ComponentProps<"header"> {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const NavbarRoot = ({ className, isOpen, onOpenChange, ...props }: NavbarProps) => {
  const slots = useMemo(() => navbarVariants(), []);

  const [internalOpen, setInternalOpen] = useState(false);

  const open = isOpen ?? internalOpen;

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (isOpen === undefined) {
        setInternalOpen(next);
      }
      onOpenChange?.(next);
    },
    [isOpen, onOpenChange],
  );

  return (
    <NavbarContext.Provider
      value={{
        isOpen: open,
        onOpenChange: handleOpenChange,
        slots,
      }}
    >
      <header data-open={open} className={cn(slots.root(), className)} {...props} />
    </NavbarContext.Provider>
  );
};

export interface NavbarContainerProps extends React.ComponentProps<"nav"> {}

export const NavbarContainer = ({ className, ...props }: NavbarContainerProps) => {
  const { slots } = useNavbar();

  return <nav className={cn(slots.container(), className)} {...props} />;
};

export interface NavbarContentProps extends React.ComponentProps<"ul"> {}

export const NavbarContent = ({ className, ...props }: NavbarContentProps) => {
  const { slots } = useNavbar();

  return <ul className={cn(slots.content(), className)} {...props} />;
};

export interface NavbarItemProps extends React.ComponentProps<"li"> {}

export const NavbarItem = ({ className, ...props }: NavbarItemProps) => {
  const { slots } = useNavbar();
  return <li className={cn(slots.listItem(), className)} {...props} />;
};

export interface NavbarToggleProps extends React.ComponentProps<"button"> {}

export const NavbarToggle = ({ className, ...props }: NavbarToggleProps) => {
  const { slots, isOpen, onOpenChange } = useNavbar();

  const Icon = isOpen ? LucideX : LucideMenu;

  return (
    <button
      className={cn(className, slots.toggle())}
      onClick={() => onOpenChange(!isOpen)}
      {...props}
    >
      <Icon className="size-5" />
    </button>
  );
};

// Menu
export interface NavbarMenuProps extends React.ComponentProps<"ul"> {}

export const NavbarMenu = ({ className, ...props }: NavbarMenuProps) => {
  const { slots } = useNavbar();

  return <ul className={cn(slots.menu(), className)} {...props} />;
};

export interface NavbarMenuItemProps extends React.ComponentProps<"li"> {}

export const NavbarMenuItem = ({ className, ...props }: NavbarMenuItemProps) => {
  const { slots } = useNavbar();

  return <li className={cn(slots.menuItem(), className)} {...props} />;
};
