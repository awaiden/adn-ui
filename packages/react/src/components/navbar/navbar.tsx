"use client";

import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { LucideMenu, LucideX } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { Drawer } from "../drawer";
import { NavbarContext } from "./navbar.context";
import { type NavbarVariants, navbarVariants } from "./navbar.variants";
import { useNavbar } from "./use-navbar";

export interface NavbarProps extends NavbarVariants, React.ComponentProps<"header"> {
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

export const NavbarRoot = ({
  className,
  isOpen: _isOpen,
  defaultIsOpen,
  setIsOpen: _setIsOpen,
  ...props
}: NavbarProps) => {
  const slots = useMemo(() => navbarVariants({}), []);

  const [isOpen, setIsOpen] = useControllableState({
    prop: _isOpen,
    defaultProp: Boolean(defaultIsOpen),
    onChange: _setIsOpen,
  });

  return (
    <NavbarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        slots,
      }}
    >
      <header
        data-open={open}
        className={cn(slots.root(), className)}
        {...props}
      />
    </NavbarContext.Provider>
  );
};

export interface NavbarContainerProps extends React.ComponentProps<"nav"> {}

export const NavbarContainer = ({ className, ...props }: NavbarContainerProps) => {
  const { slots } = useNavbar();

  return (
    <nav
      className={cn(slots.container(), className)}
      {...props}
    />
  );
};

export interface NavbarContentProps extends React.ComponentProps<"ul"> {}

export const NavbarContent = ({ className, ...props }: NavbarContentProps) => {
  const { slots } = useNavbar();

  return (
    <ul
      className={cn(slots.content(), className)}
      {...props}
    />
  );
};

export interface NavbarItemProps extends React.ComponentProps<"li"> {}

export const NavbarItem = ({ className, ...props }: NavbarItemProps) => {
  const { slots } = useNavbar();
  return (
    <li
      className={cn(slots.listItem(), className)}
      {...props}
    />
  );
};

export interface NavbarToggleProps extends React.ComponentProps<"button"> {}

export const NavbarToggle = ({ className, ...props }: NavbarToggleProps) => {
  const { slots, isOpen, setIsOpen } = useNavbar();

  const Icon = isOpen ? LucideX : LucideMenu;

  return (
    <button
      className={cn(className, slots.toggle())}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      <Icon className='size-5' />
    </button>
  );
};

// Menu
export interface NavbarMenuProps extends React.ComponentProps<typeof Drawer.Root> {}

export const NavbarMenu = ({ children, ...props }: NavbarMenuProps) => {
  const { isOpen, setIsOpen } = useNavbar();

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      {...props}
    >
      {children}
    </Drawer.Root>
  );
};

// Menu Content
export interface NavbarMenuContentProps extends React.ComponentProps<typeof Drawer.Popup> {
  backdrop?: boolean;
  close?: boolean;
}

export const NavbarMenuContent = ({ className, children, ...props }: NavbarMenuContentProps) => {
  const { slots } = useNavbar();

  return (
    <Drawer.Portal>
      <Drawer.Backdrop />
      <Drawer.Viewport>
        <Drawer.Popup
          className={cn(slots.menu(), className)}
          {...props}
        >
          <Drawer.Close />
          {children}
        </Drawer.Popup>
      </Drawer.Viewport>
    </Drawer.Portal>
  );
};
