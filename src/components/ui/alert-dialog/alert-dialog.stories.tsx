"use client";

import React from "react";
import {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
  AlertDialogActions,
} from "./alert-dialog";
import { Button } from "../button";

export default {
  title: "Components/AlertDialog",
  component: AlertDialogRoot,
};

export const Default = () => (
  <AlertDialogRoot>
    <AlertDialogTrigger>
      <Button variant="outline">Open Alert Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogBackdrop />
      <AlertDialogPopup>
        <div className="flex flex-col gap-1">
          <AlertDialogTitle>Discard draft?</AlertDialogTitle>
          <AlertDialogDescription>
            You cannot undo this action once completed.
          </AlertDialogDescription>
        </div>
        <AlertDialogActions>
          <AlertDialogClose>
            <Button variant="ghost">Cancel</Button>
          </AlertDialogClose>
          <AlertDialogClose>
            <Button variant="primary">Discard</Button>
          </AlertDialogClose>
        </AlertDialogActions>
      </AlertDialogPopup>
    </AlertDialogPortal>
  </AlertDialogRoot>
);

export const Destructive = () => (
  <AlertDialogRoot variant="destructive">
    <AlertDialogTrigger>
      <Button variant="destructive">Delete Account</Button>
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogBackdrop />
      <AlertDialogPopup>
        <div className="flex flex-col gap-1">
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account.
          </AlertDialogDescription>
        </div>
        <AlertDialogActions>
          <AlertDialogClose>
            <Button variant="ghost">Cancel</Button>
          </AlertDialogClose>
          <AlertDialogClose>
            <Button variant="destructive">Delete</Button>
          </AlertDialogClose>
        </AlertDialogActions>
      </AlertDialogPopup>
    </AlertDialogPortal>
  </AlertDialogRoot>
);
