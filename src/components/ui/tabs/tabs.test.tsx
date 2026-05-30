import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { Tabs } from ".";

afterEach(cleanup);

describe("Tabs", () => {
  const renderTabs = (defaultValue = "a") =>
    render(
      <Tabs.Root defaultValue={defaultValue}>
        <Tabs.List>
          <Tabs.Trigger value="a">Tab A</Tabs.Trigger>
          <Tabs.Trigger value="b">Tab B</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="a">Content A</Tabs.Content>
        <Tabs.Content value="b">Content B</Tabs.Content>
      </Tabs.Root>,
    );

  it("renders with default tab active", () => {
    renderTabs();
    expect(screen.getByRole("tab", { name: "Tab A" })).toHaveAttribute("data-state", "active");
    expect(screen.getByRole("tab", { name: "Tab B" })).toHaveAttribute("data-state", "inactive");
  });

  it("shows correct content for active tab", () => {
    renderTabs();
    expect(screen.getByText("Content A")).toBeInTheDocument();
  });

  it("switches tab on click", async () => {
    renderTabs();

    await userEvent.click(screen.getByRole("tab", { name: "Tab B" }));

    expect(screen.getByRole("tab", { name: "Tab B" })).toHaveAttribute("data-state", "active");
    expect(screen.getByRole("tab", { name: "Tab A" })).toHaveAttribute("data-state", "inactive");
    expect(screen.getByText("Content B")).toBeInTheDocument();
  });

  it("supports keyboard navigation", async () => {
    renderTabs();

    screen.getByRole("tab", { name: "Tab A" }).focus();
    await userEvent.keyboard("{ArrowRight}");

    expect(screen.getByRole("tab", { name: "Tab B" })).toHaveFocus();
  });
});
