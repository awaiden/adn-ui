"use client";

import { Dialog as BaseDrawer } from "@base-ui/react";
import { LucideX } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { DrawerContext } from "./drawer.context";
import { type DrawerVariants, drawerVariants } from "./drawer.variants";
import { useDrawer } from "./use-drawer";

// Root
export interface DrawerProps extends DrawerVariants, BaseDrawer.Root.Props {}

export const DrawerRoot = ({ position, ...props }: DrawerProps) => {
  const slots = useMemo(() => drawerVariants({ position }), [position]);

  return (
    <DrawerContext value={{ slots }}>
      <BaseDrawer.Root {...props} />
    </DrawerContext>
  );
};

// Tigger
export interface DrawerTriggerProps extends BaseDrawer.Trigger.Props {}

export const DrawerTrigger = ({ className, ...props }: DrawerTriggerProps) => {
  const { slots } = useDrawer();
  return <BaseDrawer.Trigger className={cn(slots.trigger(), className)} {...props} />;
};

// Portal
export interface DrawerPortalProps extends BaseDrawer.Portal.Props {}

export const DrawerPortal = ({ className, ...props }: DrawerPortalProps) => {
  const { slots } = useDrawer();
  return <BaseDrawer.Portal className={cn(slots.portal(), className)} {...props} />;
};

// Backdrop
export interface DrawerBackdropProps extends BaseDrawer.Backdrop.Props {}

export const DrawerBackdrop = ({ className, ...props }: DrawerBackdropProps) => {
  const { slots } = useDrawer();
  return <BaseDrawer.Backdrop className={cn(slots.backdrop(), className)} {...props} />;
};

// Viewport
export interface DrawerViewportProps extends BaseDrawer.Viewport.Props {}

export const DrawerViewport = ({ className, ...props }: DrawerViewportProps) => {
  const { slots } = useDrawer();
  return <BaseDrawer.Viewport className={cn(slots.viewport(), className)} {...props} />;
};

// Popup
export interface DrawerPopupProps extends BaseDrawer.Popup.Props {}

export const DrawerPopup = ({ className, ...props }: DrawerPopupProps) => {
  const { slots } = useDrawer();
  return <BaseDrawer.Popup className={cn(slots.popup(), className)} {...props} />;
};

// Title
export interface DrawerTitleProps extends BaseDrawer.Title.Props {}

export const DrawerTitle = ({ className, ...props }: DrawerTitleProps) => {
  const { slots } = useDrawer();
  return <BaseDrawer.Title className={cn(slots.title(), className)} {...props} />;
};

// Description
export interface DrawerDescriptionProps extends BaseDrawer.Description.Props {}

export const DrawerDescription = ({ className, ...props }: DrawerDescriptionProps) => {
  const { slots } = useDrawer();
  return <BaseDrawer.Description className={cn(slots.description(), className)} {...props} />;
};

// Close
export interface DrawerCloseProps extends BaseDrawer.Close.Props {}

export const DrawerClose = ({ className, children, ...props }: DrawerCloseProps) => {
  const { slots } = useDrawer();
  return (
    <BaseDrawer.Close className={cn(slots.close(), className)} {...props}>
      {children ?? <LucideX />}
    </BaseDrawer.Close>
  );
};

// Assignments
