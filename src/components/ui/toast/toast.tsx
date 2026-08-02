"use client";

import "./toast.css";
import { Toast as BaseToast } from "@base-ui/react/toast";
import React from "react";
import { cn } from "tailwind-variants";

import { ToastContext, useToastContext } from "./toast.context";
import { toastVariants, type ToastVariants } from "./toast.variants";

export type ToastProviderProps = React.ComponentProps<typeof BaseToast.Provider>;

export const ToastProvider = (props: ToastProviderProps) => {
  return <BaseToast.Provider {...props} />;
};

export type ToastPortalProps = React.ComponentProps<typeof BaseToast.Portal>;

export const ToastPortal = (props: ToastPortalProps) => {
  return <BaseToast.Portal {...props} />;
};

export type ToastViewportProps = React.ComponentProps<typeof BaseToast.Viewport>;

export const ToastViewport = ({ className, ...props }: ToastViewportProps) => {
  const slots = toastVariants();
  return <BaseToast.Viewport className={cn(slots.viewport(), className)} {...props} />;
};

export type ToastRootProps = ToastVariants & React.ComponentProps<typeof BaseToast.Root>;

export const ToastRoot = ({ children, className, variant, ...props }: ToastRootProps) => {
  const slots = toastVariants({ variant });

  return (
    <ToastContext.Provider value={{ slots }}>
      <BaseToast.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseToast.Root>
    </ToastContext.Provider>
  );
};

export type ToastContentProps = React.ComponentProps<typeof BaseToast.Content>;

export const ToastContent = ({ className, ...props }: ToastContentProps) => {
  const { slots } = useToastContext();
  return <BaseToast.Content className={cn(slots.content(), className)} {...props} />;
};

export type ToastTitleProps = React.ComponentProps<typeof BaseToast.Title>;

export const ToastTitle = ({ className, ...props }: ToastTitleProps) => {
  const { slots } = useToastContext();
  return <BaseToast.Title className={cn(slots.title(), className)} {...props} />;
};

export type ToastDescriptionProps = React.ComponentProps<typeof BaseToast.Description>;

export const ToastDescription = ({ className, ...props }: ToastDescriptionProps) => {
  const { slots } = useToastContext();
  return <BaseToast.Description className={cn(slots.description(), className)} {...props} />;
};

export type ToastActionProps = React.ComponentProps<typeof BaseToast.Action>;

export const ToastAction = ({ className, ...props }: ToastActionProps) => {
  const { slots } = useToastContext();
  return <BaseToast.Action className={cn(slots.action(), className)} {...props} />;
};

export type ToastCloseProps = React.ComponentProps<typeof BaseToast.Close>;

export const ToastClose = ({ className, children, ...props }: ToastCloseProps) => {
  const { slots } = useToastContext();
  return (
    <BaseToast.Close className={cn(slots.close(), className)} {...props}>
      {children ?? (
        <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      )}
    </BaseToast.Close>
  );
};

export const useToastManager = BaseToast.useToastManager;
