"use client";

import "./popover.css";

import React from "react";

import { Popover as BasePopover } from "@base-ui/react/popover";
import { cn } from "tailwind-variants";

import { PopoverContext, usePopoverContext } from "./popover.context";
import { popoverVariants, type PopoverVariants } from "./popover.variants";

export type PopoverProps = PopoverVariants & React.ComponentProps<typeof BasePopover.Root>;

export const PopoverRoot = ({ children, size, ...props }: PopoverProps) => {
  const slots = popoverVariants({ size });

  return (
    <PopoverContext.Provider value={{ slots }}>
      <BasePopover.Root {...props}>{children}</BasePopover.Root>
    </PopoverContext.Provider>
  );
};

export type PopoverTriggerProps = React.ComponentProps<typeof BasePopover.Trigger> & {
  render?: React.ReactElement;
  asChild?: boolean;
};

export const PopoverTrigger = ({
  className,
  children,
  render,
  asChild: _asChild,
  ...props
}: PopoverTriggerProps) => {
  const { slots } = usePopoverContext();
  const renderElement = render ?? (React.isValidElement(children) ? children : undefined);
  return (
    <BasePopover.Trigger
      className={cn(slots.trigger(), className)}
      {...props}
      {...(renderElement ? { render: renderElement } : { children })}
    />
  );
};

export type PopoverPortalProps = React.ComponentProps<typeof BasePopover.Portal>;

export const PopoverPortal = (props: PopoverPortalProps) => {
  return <BasePopover.Portal {...props} />;
};

export type PopoverBackdropProps = React.ComponentProps<typeof BasePopover.Backdrop>;

export const PopoverBackdrop = ({ className, ...props }: PopoverBackdropProps) => {
  const { slots } = usePopoverContext();
  return <BasePopover.Backdrop className={cn(slots.backdrop(), className)} {...props} />;
};

export type PopoverPositionerProps = React.ComponentProps<typeof BasePopover.Positioner>;

export const PopoverPositioner = ({
  className,
  sideOffset = 4,
  ...props
}: PopoverPositionerProps) => {
  const { slots } = usePopoverContext();
  return (
    <BasePopover.Positioner
      className={cn(slots.positioner(), className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

export type PopoverPopupProps = React.ComponentProps<typeof BasePopover.Popup>;

export const PopoverPopup = ({ className, ...props }: PopoverPopupProps) => {
  const { slots } = usePopoverContext();
  return <BasePopover.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type PopoverTitleProps = React.ComponentProps<typeof BasePopover.Title>;

export const PopoverTitle = ({ className, ...props }: PopoverTitleProps) => {
  const { slots } = usePopoverContext();
  return <BasePopover.Title className={cn(slots.title(), className)} {...props} />;
};

export type PopoverDescriptionProps = React.ComponentProps<typeof BasePopover.Description>;

export const PopoverDescription = ({ className, ...props }: PopoverDescriptionProps) => {
  const { slots } = usePopoverContext();
  return <BasePopover.Description className={cn(slots.description(), className)} {...props} />;
};

export type PopoverArrowProps = React.ComponentProps<typeof BasePopover.Arrow>;

export const PopoverArrow = ({ className, ...props }: PopoverArrowProps) => {
  const { slots } = usePopoverContext();
  return <BasePopover.Arrow className={cn(slots.arrow(), className)} {...props} />;
};

export type PopoverCloseProps = React.ComponentProps<typeof BasePopover.Close> & {
  render?: React.ReactElement;
  asChild?: boolean;
};

export const PopoverClose = ({
  className,
  children,
  render,
  asChild: _asChild,
  ...props
}: PopoverCloseProps) => {
  const { slots } = usePopoverContext();
  const renderElement = render ?? (React.isValidElement(children) ? children : undefined);
  return (
    <BasePopover.Close
      className={cn(slots.close(), className)}
      {...props}
      {...(renderElement ? { render: renderElement } : { children })}
    />
  );
};
