"use client";

import { Button, Card, Field, Tabs } from "@adn-ui/react";

export default function Default() {
  return (
    <Tabs className="w-100" defaultValue="account">
      <Tabs.List className="grid w-full grid-cols-2">
        <Tabs.Tab value="account">Account</Tabs.Tab>
        <Tabs.Tab value="password">Password</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="account">
        <Card>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>
              Make changes to your account here. Click save when you're done.
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-2">
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Field.Control defaultValue="Pedro Duarte" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Field.Control defaultValue="@peduarte" />
            </Field.Root>
          </Card.Content>
          <div className="flex items-center p-6 pt-0">
            <Button>Save changes</Button>
          </div>
        </Card>
      </Tabs.Panel>
      <Tabs.Panel value="password">
        <Card>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>
              Change your password here. After saving, you'll be logged out.
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-2">
            <Field.Root>
              <Field.Label>Current password</Field.Label>
              <Field.Control type="password" />
            </Field.Root>
            <Field.Root>
              <Field.Label>New password</Field.Label>
              <Field.Control type="password" />
            </Field.Root>
          </Card.Content>
          <div className="flex items-center p-6 pt-0">
            <Button>Save password</Button>
          </div>
        </Card>
      </Tabs.Panel>
    </Tabs>
  );
}
