"use client";

import { AlertDialog, buttonVariants } from "@adn-ui/react";

export default function Default() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className={buttonVariants({ variant: "danger" })}>
        Open Alert Dialog
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Popup>
          <AlertDialog.Title>Alert Dialog Title</AlertDialog.Title>
          <AlertDialog.Description>
            This is an example of an alert dialog description.
          </AlertDialog.Description>
          <div className="my-4">
            <p>This is some additional content inside the alert dialog popup.</p>
          </div>
          <AlertDialog.Close />
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
