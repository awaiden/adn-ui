import { Dialog as BaseDialog } from "@base-ui/react";
import { LucideX } from "lucide-react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { DialogContext } from "./dialog.context";
import { type DialogVariants, dialogVariants } from "./dialog.variants";
import { useDialog } from "./use-dialog";

// Root
export interface DialogProps extends DialogVariants, BaseDialog.Root.Props {}

export const DialogRoot = ({ ...props }: DialogProps) => {
  const slots = useMemo(() => dialogVariants(), []);

  return (
    <DialogContext.Provider value={{ slots }}>
      <BaseDialog.Root {...props} />
    </DialogContext.Provider>
  );
};

// Trigger
export interface DialogTriggerProps extends BaseDialog.Trigger.Props {}

export const DialogTrigger = ({ className, ...props }: DialogTriggerProps) => {
  const { slots } = useDialog();

  return (
    <BaseDialog.Trigger
      className={cn(slots.trigger(), className)}
      {...props}
    />
  );
};

// Portal
export interface DialogPortalProps extends BaseDialog.Portal.Props {}

export const DialogPortal = ({ className, ...props }: DialogPortalProps) => {
  const { slots } = useDialog();

  return (
    <BaseDialog.Portal
      className={cn(slots.portal(), className)}
      {...props}
    />
  );
};

// Backdrop
export interface DialogBackdropProps extends BaseDialog.Backdrop.Props {}

export const DialogBackdrop = ({ className, ...props }: DialogBackdropProps) => {
  const { slots } = useDialog();
  return (
    <BaseDialog.Backdrop
      className={cn(slots.backdrop(), className)}
      {...props}
    />
  );
};

// Viewport
export interface DialogViewportProps extends BaseDialog.Viewport.Props {}

export const DialogViewport = ({ className, ...props }: DialogViewportProps) => {
  const { slots } = useDialog();
  return (
    <BaseDialog.Viewport
      className={cn(slots.viewport(), className)}
      {...props}
    />
  );
};

// Popup
export interface DialogPopupProps extends BaseDialog.Popup.Props {}

export const DialogPopup = ({ className, ...props }: DialogPopupProps) => {
  const { slots } = useDialog();
  return (
    <BaseDialog.Popup
      className={cn(slots.popup(), className)}
      {...props}
    />
  );
};

// Title
export interface DialogTitleProps extends BaseDialog.Title.Props {}

export const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  const { slots } = useDialog();
  return (
    <BaseDialog.Title
      className={cn(slots.title(), className)}
      {...props}
    />
  );
};

// Description
export interface DialogDescriptionProps extends BaseDialog.Description.Props {}

export const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => {
  const { slots } = useDialog();
  return (
    <BaseDialog.Description
      className={cn(slots.description(), className)}
      {...props}
    />
  );
};

// Close
export interface DialogCloseProps extends BaseDialog.Close.Props {}

export const DialogClose = ({ className, ...props }: DialogCloseProps) => {
  const { slots } = useDialog();

  return (
    <BaseDialog.Close
      className={cn(slots.close(), className)}
      {...props}
    >
      <LucideX />
    </BaseDialog.Close>
  );
};

// Content
export interface DialogContentProps extends React.ComponentProps<"div"> {}

export const DialogContent = ({ className, ...props }: DialogContentProps) => {
  const { slots } = useDialog();
  return (
    <div
      className={cn(slots.content(), className)}
      {...props}
    />
  );
};
