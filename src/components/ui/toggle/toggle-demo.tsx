"use client";

import { Bookmark, Pin } from "lucide-react";
import { ToggleRoot } from "./toggle";

export function ToggleDemo() {
  return (
    <div className="flex items-center gap-3">
      <ToggleRoot aria-label="Toggle bookmark" variant="outline">
        <Bookmark className="size-4" />
        Bookmark
      </ToggleRoot>
      <ToggleRoot aria-label="Toggle pin" variant="default" defaultPressed>
        <Pin className="size-4" />
        Pinned
      </ToggleRoot>
    </div>
  );
}
