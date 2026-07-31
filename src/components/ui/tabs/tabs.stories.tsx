"use client";

import React from "react";
import { TabsRoot, TabsList, TabsTab, TabsPanel } from "./tabs";

export default {
  title: "Components/Tabs",
  component: TabsRoot,
};

export const Default = () => (
  <TabsRoot defaultValue="account" className="w-full max-w-sm">
    <TabsList className="flex border-b">
      <TabsTab value="account" className="px-4 py-2 text-sm font-medium border-b-2">Account</TabsTab>
      <TabsTab value="password" className="px-4 py-2 text-sm font-medium border-b-2">Password</TabsTab>
    </TabsList>
    <TabsPanel value="account" className="py-4 text-sm">Account details and settings.</TabsPanel>
    <TabsPanel value="password" className="py-4 text-sm">Change your password here.</TabsPanel>
  </TabsRoot>
);
