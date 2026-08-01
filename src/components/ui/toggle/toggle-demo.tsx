"use client";

import { ToggleRoot } from "./toggle";

export function ToggleDemo() {
  return (
    <div className="flex items-center gap-3">
      <ToggleRoot aria-label="Toggle bookmark" variant="outline">
        <svg className="size-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
        Bookmark
      </ToggleRoot>
      <ToggleRoot aria-label="Toggle pin" variant="default" defaultPressed>
        <svg className="size-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="12" y1="17" x2="12" y2="22" />
          <path d="M5 17h14l-1.5-5H17V5h1V3H6v2h1v7H5.5L5 17z" />
        </svg>
        Pinned
      </ToggleRoot>
    </div>
  );
}
