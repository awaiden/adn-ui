"use client";

import { Tabs } from "@adn-ui/react";

const Underline = () => (
  <Tabs.Root defaultValue="account" className="w-[400px]">
    <Tabs.List>
      <Tabs.Trigger value="account">Account</Tabs.Trigger>
      <Tabs.Trigger value="password">Password</Tabs.Trigger>
      <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="account" className="rounded-b-md border p-4">
      <p className="text-sm">Make changes to your account here.</p>
    </Tabs.Content>
    <Tabs.Content value="password" className="rounded-b-md border p-4">
      <p className="text-sm">Change your password here.</p>
    </Tabs.Content>
    <Tabs.Content value="settings" className="rounded-b-md border p-4">
      <p className="text-sm">Update your preferences.</p>
    </Tabs.Content>
  </Tabs.Root>
);

const Outline = () => (
  <Tabs.Root defaultValue="overview" variant="outline" className="w-[400px]">
    <Tabs.List>
      <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
      <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
      <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="overview" className="mt-4">
      <div className="flex h-[100px] items-center justify-center rounded-md border-2 border-dashed">
        Overview Dashboard
      </div>
    </Tabs.Content>
    <Tabs.Content value="analytics" className="mt-4">
      <div className="flex h-[100px] items-center justify-center rounded-md border-2 border-dashed">
        Analytics Charts
      </div>
    </Tabs.Content>
    <Tabs.Content value="reports" className="mt-4">
      <div className="flex h-[100px] items-center justify-center rounded-md border-2 border-dashed">
        Generated Reports
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

export const TabsExample = {
  Outline,
  Underline,
};
