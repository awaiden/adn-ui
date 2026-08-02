"use client";

import React from "react";

import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRoot,
  SidebarTrigger,
} from "./sidebar";

export default {
  title: "Components/Sidebar",
  component: SidebarRoot,
};

export const Default = () => (
  <SidebarProvider className="min-h-[300px] border rounded-lg">
    <SidebarRoot>
      <SidebarHeader>
        <span className="font-semibold text-sm">App Sidebar</span>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive>Home</SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>Profile</SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </SidebarRoot>
  </SidebarProvider>
);
