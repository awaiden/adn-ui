"use client";

import { TabsIndicator, TabsList, TabsPanel, TabsRoot, TabsTab } from "./tabs";

export function TabsDemo() {
  return (
    <TabsRoot defaultValue="account" variant="pills" className="max-w-md">
      <TabsList>
        <TabsTab value="account">Account</TabsTab>
        <TabsTab value="password">Password</TabsTab>
        <TabsTab value="notifications">Notifications</TabsTab>
        <TabsIndicator />
      </TabsList>
      <TabsPanel value="account">
        <p className="text-muted-foreground text-xs">
          Manage your profile information and account preferences here.
        </p>
      </TabsPanel>
      <TabsPanel value="password">
        <p className="text-muted-foreground text-xs">
          Change your security credentials and active sessions.
        </p>
      </TabsPanel>
      <TabsPanel value="notifications">
        <p className="text-muted-foreground text-xs">
          Configure email, SMS, and desktop notification settings.
        </p>
      </TabsPanel>
    </TabsRoot>
  );
}
