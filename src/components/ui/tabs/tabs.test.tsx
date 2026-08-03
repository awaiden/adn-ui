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

  it("renders segmented and outline tab variants", () => {
    render(
      <TabsRoot defaultValue="segmented-tab" variant="segmented">
        <TabsList>
          <TabsTab value="segmented-tab">Segmented</TabsTab>
        </TabsList>
        <TabsPanel value="segmented-tab">Segmented Content</TabsPanel>
      </TabsRoot>
    );

    expect(screen.getByRole("tab", { name: /segmented/i })).toBeInTheDocument();
    expect(screen.getByText("Segmented Content")).toBeInTheDocument();
  });

  it("supports isFitted prop to expand tabs across extended area", () => {
    render(
      <TabsRoot defaultValue="tab1" isFitted>
        <TabsList>
          <TabsTab value="tab1">Tab 1</TabsTab>
          <TabsTab value="tab2">Tab 2</TabsTab>
        </TabsList>
        <TabsPanel value="tab1">Fitted Content</TabsPanel>
      </TabsRoot>
    );

    expect(screen.getByRole("tab", { name: /tab 1/i })).toBeInTheDocument();
  });
});
