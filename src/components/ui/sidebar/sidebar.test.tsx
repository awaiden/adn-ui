import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
} from "./index";

describe("Sidebar component", () => {
  it("toggles collapse state when trigger button is clicked", () => {
    render(
      <SidebarProvider defaultOpen={true}>
        <SidebarRoot data-testid="sidebar">
          <SidebarHeader>
            <span>Logo</span>
            <SidebarTrigger data-testid="trigger" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </SidebarRoot>
      </SidebarProvider>
    );

    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveAttribute("data-collapsed", "false");

    const trigger = screen.getByTestId("trigger");
    fireEvent.click(trigger);

    expect(sidebar).toHaveAttribute("data-collapsed", "true");
  });
});
