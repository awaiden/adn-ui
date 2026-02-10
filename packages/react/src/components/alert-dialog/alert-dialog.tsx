import { AlertDialog as BaseAlertDialog } from "@base-ui/react";
import { LucideX } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { AlertDialogContext } from "./alert-dialog.context";
import { type AlertDialogVariants, alertDialogVariants } from "./alert-dialog.variants";
import { useAlertDialog } from "./use-alert-dialog";

// Root
export interface AlertDialogProps extends AlertDialogVariants, BaseAlertDialog.Root.Props {}

export const AlertDialogRoot = ({ ...props }: AlertDialogProps) => {
  const slots = useMemo(() => alertDialogVariants(), []);

  return (
    <AlertDialogContext value={{ slots }}>
      <BaseAlertDialog.Root {...props} />
    </AlertDialogContext>
  );
};

// Trigger
export interface AlertDialogTriggerProps extends BaseAlertDialog.Trigger.Props {}

export const AlertDialogTrigger = ({ className, ...props }: AlertDialogTriggerProps) => {
  const { slots } = useAlertDialog();
  return (
    <BaseAlertDialog.Trigger
      className={cn(slots.trigger(), className)}
      {...props}
    />
  );
};

// Portal
export interface AlertDialogPortalProps extends BaseAlertDialog.Portal.Props {}

export const AlertDialogPortal = ({ className, ...props }: AlertDialogPortalProps) => {
  const { slots } = useAlertDialog();
  return (
    <BaseAlertDialog.Portal
      className={cn(slots.portal(), className)}
      {...props}
    />
  );
};

// Backdrop
export interface AlertDialogBackdropProps extends BaseAlertDialog.Backdrop.Props {}

export const AlertDialogBackdrop = ({ className, ...props }: AlertDialogBackdropProps) => {
  const { slots } = useAlertDialog();
  return (
    <BaseAlertDialog.Backdrop
      className={cn(slots.backdrop(), className)}
      {...props}
    />
  );
};

// Viewport
export interface AlertDialogViewportProps extends BaseAlertDialog.Viewport.Props {}

export const AlertDialogViewport = ({ className, ...props }: AlertDialogViewportProps) => {
  const { slots } = useAlertDialog();
  return (
    <BaseAlertDialog.Viewport
      className={cn(slots.viewport(), className)}
      {...props}
    />
  );
};

// Popup
export interface AlertDialogPopupProps extends BaseAlertDialog.Popup.Props {}

export const AlertDialogPopup = ({ className, ...props }: AlertDialogPopupProps) => {
  const { slots } = useAlertDialog();
  return (
    <BaseAlertDialog.Popup
      className={cn(slots.popup(), className)}
      {...props}
    />
  );
};

// Content
export interface AlertDialogContentProps extends React.ComponentProps<"div"> {}

export const AlertDialogContent = ({ className, ...props }: AlertDialogContentProps) => {
  const { slots } = useAlertDialog();
  return (
    <div
      className={cn(className, slots.content())}
      {...props}
    />
  );
};

// Title
export interface AlertDialogTitleProps extends BaseAlertDialog.Title.Props {}

export const AlertDialogTitle = ({ className, ...props }: AlertDialogTitleProps) => {
  const { slots } = useAlertDialog();
  return (
    <BaseAlertDialog.Title
      className={cn(slots.title(), className)}
      {...props}
    />
  );
};

// Description
export interface AlertDialogDescriptionProps extends BaseAlertDialog.Description.Props {}

export const AlertDialogDescription = ({ className, ...props }: AlertDialogDescriptionProps) => {
  const { slots } = useAlertDialog();
  return (
    <BaseAlertDialog.Description
      className={cn(slots.description(), className)}
      {...props}
    />
  );
};

// Close
export interface AlertDialogCloseProps extends BaseAlertDialog.Close.Props {}

export const AlertDialogClose = ({ className, children, ...props }: AlertDialogCloseProps) => {
  const { slots } = useAlertDialog();
  return (
    <BaseAlertDialog.Close
      className={cn(slots.close(), className)}
      {...props}
    >
      {children ?? <LucideX />}
    </BaseAlertDialog.Close>
  );
};

// Exports
