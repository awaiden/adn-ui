"use client";

import { Field } from "@adn-ui/react";

export default function Default() {
  return (
    <Field.Root>
      <Field.Label>Username</Field.Label>
      <Field.Control placeholder="Enter your username" />
      <Field.Description>This is a description text.</Field.Description>
      <Field.Error />
    </Field.Root>
  );
}
