"use client";

import { Button, Dialog } from "@adn-ui/react";

const Default = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button variant="outline">Open Dialog</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Welcome</Dialog.Title>
        <Dialog.Description>This is a standard dialog component.</Dialog.Description>
      </Dialog.Header>
      <div className="py-6">
        <p className="text-sm">You can place any content here.</p>
      </div>
      <Dialog.Footer>
        <Dialog.Close asChild>
          <Button variant="secondary">Close</Button>
        </Dialog.Close>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>
);

export const DialogExample = {
  Default,
};
