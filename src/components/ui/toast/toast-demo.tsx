"use client";

import React, { useState } from "react";

import { Button } from "../button";

import {
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  useToastManager,
} from "./index";

function ToastTriggerButtons() {
  const toastManager = useToastManager();
  const [count, setCount] = useState(0);

  const showToast = (variant: "default" | "success" | "warning" | "destructive") => {
    setCount((prev) => prev + 1);
    toastManager.add({
      title: `${variant.toUpperCase()} Notification #${count + 1}`,
      description: `This is a ${variant} toast message generated via Base UI toast manager.`,
      variant,
    } as any);
  };

  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <Button variant="outline" size="sm" onClick={() => showToast("default")}>
        Default Toast
      </Button>
      <Button variant="primary" size="sm" onClick={() => showToast("success")}>
        Success Toast
      </Button>
      <Button variant="secondary" size="sm" onClick={() => showToast("warning")}>
        Warning Toast
      </Button>
      <Button variant="destructive" size="sm" onClick={() => showToast("destructive")}>
        Destructive Toast
      </Button>
    </div>
  );
}

function ToastList() {
  const { toasts } = useToastManager();

  return (
    <>
      {toasts.map((toast) => (
        <ToastRoot key={toast.id} toast={toast} variant={(toast as any).variant ?? "default"}>
          <ToastContent>
            <div className="flex flex-col gap-1">
              <ToastTitle>{toast.title}</ToastTitle>
              {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            </div>
            <ToastClose />
          </ToastContent>
        </ToastRoot>
      ))}
    </>
  );
}

export function ToastDemo() {
  return (
    <ToastProvider>
      <div className="py-6 flex justify-center">
        <ToastTriggerButtons />
      </div>
      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  );
}
