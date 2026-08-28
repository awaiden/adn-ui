"use client";

import "./toast.css";
import { Toast as BaseToast } from "@base-ui/react/toast";
import { X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/cn";

import { ToastContext, useToastContext } from "./toast.context";
import { toastVariants, type ToastVariants } from "./toast.variants";

export type ToastProviderProps = React.ComponentProps<typeof BaseToast.Provider> & {
  /**
   * Whether to render the default toast viewport and list automatically.
   * @default true
   */
  defaultViewport?: boolean;
};

function DefaultToastList() {
  const { toasts } = BaseToast.useToastManager();

  if (!toasts || toasts.length === 0) return null;

  return (
    <ToastPortal>
      <ToastViewport>
        {toasts.map((toast) => (
          <ToastRoot key={toast.id} toast={toast} variant={(toast as any).variant ?? "default"}>
            <ToastContent>
              <div className="flex flex-col gap-1">
                {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
                {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
              </div>
              <ToastClose />
            </ToastContent>
          </ToastRoot>
        ))}
      </ToastViewport>
    </ToastPortal>
  );
}

export const ToastProvider = ({
  children,
  defaultViewport = true,
  ...props
}: ToastProviderProps) => {
  return (
    <BaseToast.Provider {...props}>
      {children}
      {defaultViewport && <DefaultToastList />}
    </BaseToast.Provider>
  );
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
      {children ?? <X className="h-4 w-4" />}
    </BaseToast.Close>
  );
};

export const useToastManager = BaseToast.useToastManager;
