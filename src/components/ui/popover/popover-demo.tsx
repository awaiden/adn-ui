"use client";

import {
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "./popover";

export function PopoverDemo({
  description = "You have 3 unread messages in your inbox.",
  title = "Notifications",
}: {
  description?: string;
  title?: string;
}) {
  return (
    <PopoverRoot>
      <PopoverTrigger className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer">
        View Notifications
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverPositioner sideOffset={8}>
          <PopoverPopup>
            <PopoverClose />
            <PopoverTitle>{title}</PopoverTitle>
            <PopoverDescription>{description}</PopoverDescription>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </PopoverRoot>
  );
}
