"use client";

import "./dialog.css";

import React from "react";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { cn } from "tailwind-variants";

import { DialogContext, useDialogContext } from "./dialog.context";
import { dialogVariants, type DialogVariants } from "./dialog.variants";

export type DialogProps = DialogVariants & React.ComponentProps<typeof BaseDialog.Root>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/dialog/content.md
 */
export const DialogRoot = ({ children, size, ...props }: DialogProps) => {
  const slots = dialogVariants({ size });

  return (
    <DialogContext.Provider value={{ slots }}>
      <BaseDialog.Root {...props}>{children}</BaseDialog.Root>
    </DialogContext.Provider>
  );
};

export type DialogTriggerProps = React.ComponentProps<typeof BaseDialog.Trigger> & {
  render?: React.ReactElement;
  asChild?: boolean;
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/dialog/content.md
 */
export const DialogTrigger = ({
  className,
  children,
  render,
  asChild: _asChild,
  ...props
}: DialogTriggerProps) => {
  const { slots } = useDialogContext();
  const renderElement = render ?? (React.isValidElement(children) ? children : undefined);
  return (
    <BaseDialog.Trigger
      className={cn(slots.trigger(), className)}
      {...props}
      {...(renderElement ? { render: renderElement } : { children })}
    />
  );
};

export type DialogPortalProps = React.ComponentProps<typeof BaseDialog.Portal>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/dialog/content.md
 */
export const DialogPortal = (props: DialogPortalProps) => {
  return <BaseDialog.Portal {...props} />;
};

export type DialogBackdropProps = React.ComponentProps<typeof BaseDialog.Backdrop>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/dialog/content.md
 */
export const DialogBackdrop = ({ className, ...props }: DialogBackdropProps) => {
  const { slots } = useDialogContext();
  return <BaseDialog.Backdrop className={cn(slots.backdrop(), className)} {...props} />;
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/dialog/content.md
 */
export const DialogOverlay = DialogBackdrop;
export type DialogOverlayProps = DialogBackdropProps;

export type DialogPopupProps = React.ComponentProps<typeof BaseDialog.Popup>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/dialog/content.md
 */
export const DialogPopup = ({ className, ...props }: DialogPopupProps) => {
  const { slots } = useDialogContext();
  return <BaseDialog.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type DialogTitleProps = React.ComponentProps<typeof BaseDialog.Title>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/dialog/content.md
 */
export const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  const { slots } = useDialogContext();
  return <BaseDialog.Title className={cn(slots.title(), className)} {...props} />;
};

export type DialogDescriptionProps = React.ComponentProps<typeof BaseDialog.Description>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/dialog/content.md
 */
export const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => {
  const { slots } = useDialogContext();
  return <BaseDialog.Description className={cn(slots.description(), className)} {...props} />;
};

export type DialogCloseProps = React.ComponentProps<typeof BaseDialog.Close> & {
  render?: React.ReactElement;
  asChild?: boolean;
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/dialog/content.md
 */
export const DialogClose = ({
  className,
  children,
  render,
  asChild: _asChild,
  ...props
}: DialogCloseProps) => {
  const { slots } = useDialogContext();
  const renderElement = render ?? (React.isValidElement(children) ? children : undefined);
  return (
    <BaseDialog.Close
      className={cn(slots.close(), className)}
      {...props}
      {...(renderElement ? { render: renderElement } : { children })}
    />
  );
};
