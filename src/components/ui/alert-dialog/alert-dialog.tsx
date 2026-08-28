"use client";

import "./alert-dialog.css";
import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import React from "react";
import { cn } from "@/lib/cn";

import { AlertDialogContext, useAlertDialogContext } from "./alert-dialog.context";
import { alertDialogVariants, type AlertDialogVariants } from "./alert-dialog.variants";

export type AlertDialogProps = AlertDialogVariants &
  React.ComponentProps<typeof BaseAlertDialog.Root>;

export const AlertDialogRoot = ({ children, size, variant, ...props }: AlertDialogProps) => {
  const slots = alertDialogVariants({ size, variant });

  return (
    <AlertDialogContext.Provider value={{ slots }}>
      <BaseAlertDialog.Root {...props}>{children}</BaseAlertDialog.Root>
    </AlertDialogContext.Provider>
  );
};

export type AlertDialogTriggerProps = React.ComponentProps<typeof BaseAlertDialog.Trigger> & {
  render?: React.ReactElement;
  asChild?: boolean;
};

export const AlertDialogTrigger = ({
  className,
  children,
  render,
  asChild: _asChild,
  ...props
}: AlertDialogTriggerProps) => {
  const { slots } = useAlertDialogContext();
  const renderElement = render ?? (React.isValidElement(children) ? children : undefined);
  return (
    <BaseAlertDialog.Trigger
      className={cn(slots.trigger(), className)}
      {...props}
      {...(renderElement ? { render: renderElement } : { children })}
    />
  );
};

export type AlertDialogPortalProps = React.ComponentProps<typeof BaseAlertDialog.Portal>;

export const AlertDialogPortal = (props: AlertDialogPortalProps) => {
  return <BaseAlertDialog.Portal {...props} />;
};

export type AlertDialogBackdropProps = React.ComponentProps<typeof BaseAlertDialog.Backdrop>;

export const AlertDialogBackdrop = ({ className, ...props }: AlertDialogBackdropProps) => {
  const { slots } = useAlertDialogContext();
  return <BaseAlertDialog.Backdrop className={cn(slots.backdrop(), className)} {...props} />;
};

export const AlertDialogOverlay = AlertDialogBackdrop;
export type AlertDialogOverlayProps = AlertDialogBackdropProps;

export type AlertDialogPopupProps = React.ComponentProps<typeof BaseAlertDialog.Popup>;

export const AlertDialogPopup = ({ className, ...props }: AlertDialogPopupProps) => {
  const { slots } = useAlertDialogContext();
  return <BaseAlertDialog.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type AlertDialogTitleProps = React.ComponentProps<typeof BaseAlertDialog.Title>;

export const AlertDialogTitle = ({ className, ...props }: AlertDialogTitleProps) => {
  const { slots } = useAlertDialogContext();
  return <BaseAlertDialog.Title className={cn(slots.title(), className)} {...props} />;
};

export type AlertDialogDescriptionProps = React.ComponentProps<typeof BaseAlertDialog.Description>;

export const AlertDialogDescription = ({ className, ...props }: AlertDialogDescriptionProps) => {
  const { slots } = useAlertDialogContext();
  return <BaseAlertDialog.Description className={cn(slots.description(), className)} {...props} />;
};

export type AlertDialogCloseProps = React.ComponentProps<typeof BaseAlertDialog.Close> & {
  render?: React.ReactElement;
  asChild?: boolean;
};

export const AlertDialogClose = ({
  className,
  children,
  render,
  asChild: _asChild,
  ...props
}: AlertDialogCloseProps) => {
  const { slots } = useAlertDialogContext();
  const renderElement = render ?? (React.isValidElement(children) ? children : undefined);
  return (
    <BaseAlertDialog.Close
      className={cn(slots.close(), className)}
      {...props}
      {...(renderElement ? { render: renderElement } : { children })}
    />
  );
};

export type AlertDialogActionsProps = React.ComponentProps<"div">;

export const AlertDialogActions = ({ className, ...props }: AlertDialogActionsProps) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4", className)}
    {...props}
  />
);
