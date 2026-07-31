"use client";

import {
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export function DialogDemo() {
  return (
    <DialogRoot>
      <DialogTrigger className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
        View Notifications
      </DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <div className="flex flex-col gap-1">
            <DialogTitle>Notifications</DialogTitle>
            <DialogDescription>You are all caught up. Good job!</DialogDescription>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <DialogClose className="cursor-pointer">Close</DialogClose>
          </div>
        </DialogPopup>
      </DialogPortal>
    </DialogRoot>
  );
}
