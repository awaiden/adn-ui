import {
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  useToastManager,
} from "./toast";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/toast/content.md
 */
export const Toast = {
  Action: ToastAction,
  Close: ToastClose,
  Content: ToastContent,
  Description: ToastDescription,
  Portal: ToastPortal,
  Provider: ToastProvider,
  Root: ToastRoot,
  Title: ToastTitle,
  Viewport: ToastViewport,
};

export {
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  useToastManager,
};

export type {
  ToastActionProps,
  ToastCloseProps,
  ToastContentProps,
  ToastDescriptionProps,
  ToastPortalProps,
  ToastProviderProps,
  ToastRootProps,
  ToastTitleProps,
  ToastViewportProps,
} from "./toast";

export { ToastContext, useToastContext } from "./toast.context";
export { type ToastVariants, toastVariants } from "./toast.variants";
