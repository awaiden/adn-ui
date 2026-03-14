"use client";

import type React from "react";

export function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-50 items-center justify-center rounded-lg border bg-neutral-50/50 p-6">
      {children}
    </div>
  );
}
