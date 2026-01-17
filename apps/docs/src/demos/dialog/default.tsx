"use client";

import { Button, buttonVariants, Dialog, Field, Form } from "@adn-ui/react";

export default function Default() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={buttonVariants()}>Open Dialog</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Close />
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>This is the description of the dialog.</Dialog.Description>

          <Form className="my-4" onSubmit={(e) => e.preventDefault()}>
            <Field.Root required>
              <Field.Label>Email</Field.Label>
              <Field.Control placeholder="Enter your email" type="email" />
              <Field.Description>Please enter a valid email address.</Field.Description>
              <Field.Error />
            </Field.Root>

            <Button className="w-full" type="submit">
              Submit
            </Button>
          </Form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
