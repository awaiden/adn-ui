"use client";

import { Sidebar } from "@adn-ui/react";
import { BarChart, Home, LayoutDashboard, Settings, Users } from "lucide-react";

export default function Default() {
  return (
    <Sidebar className="bg-background h-96 w-64 border-r">
      <Sidebar.Header className="flex h-14 items-center border-b px-4 font-semibold">
        My App
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Menu>
          <Sidebar.MenuLabel>Menu</Sidebar.MenuLabel>
          <div className="px-2">
            <ul className="grid gap-1">
              <Sidebar.MenuItem>
                <Home className="mr-2 h-4 w-4" />
                Home
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <Users className="mr-2 h-4 w-4" />
                Users
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <BarChart className="mr-2 h-4 w-4" />
                Analytics
              </Sidebar.MenuItem>
            </ul>
          </div>
        </Sidebar.Menu>
        <div className="my-2 border-t" />
        <Sidebar.Menu>
          <Sidebar.MenuLabel>Settings</Sidebar.MenuLabel>
          <div className="px-2">
            <ul className="grid gap-1">
              <Sidebar.MenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Sidebar.MenuItem>
            </ul>
          </div>
        </Sidebar.Menu>
      </Sidebar.Content>
      <Sidebar.Footer className="text-muted-foreground border-t p-4 text-xs">
        © 2024 My App
      </Sidebar.Footer>
    </Sidebar>
  );
}
