"use client";

import { SeparatorRoot } from "./separator";

export function SeparatorDemo() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <div>
        <h4 className="text-sm font-semibold leading-none">adn-ui Design System</h4>
        <p className="text-xs text-muted-foreground mt-1">
          An open-source UI component library built for Astro & React 19.
        </p>
      </div>
      <SeparatorRoot />
      <div className="flex h-5 items-center gap-4 text-xs font-medium">
        <span>Docs</span>
        <SeparatorRoot orientation="vertical" />
        <span>Components</span>
        <SeparatorRoot orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  );
}
