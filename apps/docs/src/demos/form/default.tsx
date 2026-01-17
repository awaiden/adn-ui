"use client";

import { Button, Field, Form } from "@adn-ui/react";

export default function Default() {
  return (
    <Form className="w-full max-w-sm space-y-4" onSubmit={(e) => e.preventDefault()}>
      <Field.Root required>
        <Field.Label>Email</Field.Label>
        <Field.Control placeholder="Enter your email" type="email" />
        <Field.Description>Please enter a valid email address.</Field.Description>
        <Field.Error />
      </Field.Root>

      <Field.Root required>
        <Field.Label>Password</Field.Label>
        <Field.Control placeholder="Enter your password" type="password" />
        <Field.Description>Your password must be at least 8 characters long.</Field.Description>
        <Field.Error />
      </Field.Root>

      <Button className="w-full" type="submit">
        Submit
      </Button>
    </Form>
  );
}
