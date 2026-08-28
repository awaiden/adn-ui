"use client";

import { Home, Users, Settings } from "lucide-react";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRoot,
  SidebarTrigger,
} from "./sidebar";

export function SidebarDemo() {
  return (
    <SidebarProvider className="h-[380px] min-h-[380px] w-full border rounded-xl overflow-hidden shadow-xs">
      <SidebarRoot className="h-full min-h-full">
        <SidebarHeader>
          <span className="font-semibold text-sm">Application</span>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <Home className="h-4 w-4 shrink-0" />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Users className="h-4 w-4 shrink-0" />
                    <span>Users</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings className="h-4 w-4 shrink-0" />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <span className="text-xs text-muted-foreground">v1.0.0</span>
        </SidebarFooter>
      </SidebarRoot>
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-2">Main Content Area</h2>
        <p className="text-muted-foreground text-sm">
          Click the sidebar trigger button in the header to expand or collapse the sidebar.
        </p>
      </div>
    </SidebarProvider>
  );
}
