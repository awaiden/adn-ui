"use client";

// @ts-nocheck
import { Button } from "../button";
import {
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

export function AlertDialogDemo({
  actionText = "Discard",
  description = "You cannot undo this action once completed.",
  title = "Discard draft?",
  triggerText = "Open Alert Dialog",
  variant = "default",
}: {
  actionText?: string;
  description?: string;
  title?: string;
  triggerText?: string;
  variant?: "default" | "destructive";
}) {
  return (
    <AlertDialogRoot variant={variant}>
      <AlertDialogTrigger asChild>
        <Button variant={variant === "destructive" ? "destructive" : "outline"}>
          {triggerText}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogBackdrop />
        <AlertDialogPopup>
          <div className="flex flex-col gap-1">
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <AlertDialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </AlertDialogClose>
            <AlertDialogClose asChild>
              <Button variant={variant === "destructive" ? "destructive" : "primary"}>
                {actionText}
              </Button>
            </AlertDialogClose>
          </div>
        </AlertDialogPopup>
      </AlertDialogPortal>
    </AlertDialogRoot>
  );
}
