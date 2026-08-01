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
      <DialogTrigger className="border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground inline-flex cursor-pointer items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors">
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
