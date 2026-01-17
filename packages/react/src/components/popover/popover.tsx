"use client";

import { Popover as BasePopover } from "@base-ui/react";
import { LucideX } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { PopoverContext } from "./popover.context";
import { type PopoverVariants, popoverVariants } from "./popover.variants";
import { usePopover } from "./use-popover";

// Root
export interface PopoverProps extends PopoverVariants, BasePopover.Root.Props {}

export const PopoverRoot = ({ ...props }: PopoverProps) => {
  const slots = useMemo(() => popoverVariants({}), []);

  return (
    <PopoverContext value={{ slots }}>
      <BasePopover.Root {...props} />
    </PopoverContext>
  );
};

// Trigger
export interface PopoverTriggerProps extends BasePopover.Trigger.Props {}
export const PopoverTrigger = ({ className, ...props }: PopoverTriggerProps) => {
  const { slots } = usePopover();

  return <BasePopover.Trigger className={cn(className, slots.trigger())} {...props} />;
};

// Portal
export interface PopoverPortalProps extends BasePopover.Portal.Props {}
export const PopoverPortal = ({ className, ...props }: PopoverPortalProps) => {
  const { slots } = usePopover();

  return <BasePopover.Portal className={cn(className, slots.portal())} {...props} />;
};

// Backdrop
export interface PopoverBackdropProps extends BasePopover.Backdrop.Props {}
export const PopoverBackdrop = ({ className, ...props }: PopoverBackdropProps) => {
  const { slots } = usePopover();

  return <BasePopover.Backdrop className={cn(className, slots.backdrop())} {...props} />;
};

// Positioner
export interface PopoverPositionerProps extends BasePopover.Positioner.Props {}
export const PopoverPositioner = ({ className, ...props }: PopoverPositionerProps) => {
  const { slots } = usePopover();

  return <BasePopover.Positioner className={cn(className, slots.positioner())} {...props} />;
};

// Popup
export interface PopoverPopupProps extends BasePopover.Popup.Props {}
export const PopoverPopup = ({ className, ...props }: PopoverPopupProps) => {
  const { slots } = usePopover();

  return <BasePopover.Popup className={cn(className, slots.popup())} {...props} />;
};

// Arrow
export interface PopoverArrowProps extends BasePopover.Arrow.Props {}
export const PopoverArrow = ({ className, ...props }: PopoverArrowProps) => {
  const { slots } = usePopover();

  return <BasePopover.Arrow className={cn(className, slots.arrow())} {...props} />;
};

// Viewport
export interface PopoverViewportProps extends BasePopover.Viewport.Props {}
export const PopoverViewport = ({ className, ...props }: PopoverViewportProps) => {
  const { slots } = usePopover();

  return <BasePopover.Viewport className={cn(className, slots.viewport())} {...props} />;
};

// Title
export interface PopoverTitleProps extends BasePopover.Title.Props {}
export const PopoverTitle = ({ className, ...props }: PopoverTitleProps) => {
  const { slots } = usePopover();

  return <BasePopover.Title className={cn(className, slots.title())} {...props} />;
};

// Description
export interface PopoverDescriptionProps extends BasePopover.Description.Props {}
export const PopoverDescription = ({ className, ...props }: PopoverDescriptionProps) => {
  const { slots } = usePopover();

  return <BasePopover.Description className={cn(className, slots.description())} {...props} />;
};

// Close
export interface PopoverCloseProps extends BasePopover.Close.Props {}
export const PopoverClose = ({ className, children, ...props }: PopoverCloseProps) => {
  const { slots } = usePopover();

  return (
    <BasePopover.Close className={cn(className, slots.close())} {...props}>
      {children ?? <LucideX />}
    </BasePopover.Close>
  );
};
