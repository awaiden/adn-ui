import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { TabsList, TabsPanel, TabsRoot, TabsTab } from "./index";

describe("Tabs component", () => {
  it("renders tab triggers and active tab panel", () => {
    render(
      <TabsRoot defaultValue="account">
        <TabsList>
          <TabsTab value="account">Account</TabsTab>
          <TabsTab value="password">Password</TabsTab>
        </TabsList>
        <TabsPanel value="account">Account settings panel</TabsPanel>
        <TabsPanel value="password">Password settings panel</TabsPanel>
      </TabsRoot>
    );

    expect(screen.getByRole("tab", { name: /account/i })).toBeInTheDocument();
    expect(screen.getByText("Account settings panel")).toBeInTheDocument();
  });
});
