import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { Accordion } from ".";

afterEach(cleanup);

describe("Accordion", () => {
  it("renders triggers", () => {
    render(
      <Accordion.Root collapsible type="single">
        <Accordion.Item value="a">
          <Accordion.Trigger>Item A</Accordion.Trigger>
          <Accordion.Content>Content A</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="b">
          <Accordion.Trigger>Item B</Accordion.Trigger>
          <Accordion.Content>Content B</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>,
    );

    expect(screen.getByRole("button", { name: "Item A" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Item B" })).toBeInTheDocument();
  });

  it("expands and collapses in single mode", async () => {
    render(
      <Accordion.Root collapsible type="single">
        <Accordion.Item value="a">
          <Accordion.Trigger>Item A</Accordion.Trigger>
          <Accordion.Content>Content A</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="b">
          <Accordion.Trigger>Item B</Accordion.Trigger>
          <Accordion.Content>Content B</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>,
    );

    const triggerA = screen.getByRole("button", { name: "Item A" });
    const triggerB = screen.getByRole("button", { name: "Item B" });

    await userEvent.click(triggerA);
    expect(triggerA).toHaveAttribute("data-state", "open");

    await userEvent.click(triggerB);
    expect(triggerB).toHaveAttribute("data-state", "open");
    expect(triggerA).toHaveAttribute("data-state", "closed");

    await userEvent.click(triggerB);
    expect(triggerB).toHaveAttribute("data-state", "closed");
  });

  it("allows multiple items open simultaneously", async () => {
    render(
      <Accordion.Root type="multiple">
        <Accordion.Item value="a">
          <Accordion.Trigger>Item A</Accordion.Trigger>
          <Accordion.Content>Content A</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="b">
          <Accordion.Trigger>Item B</Accordion.Trigger>
          <Accordion.Content>Content B</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>,
    );

    const triggerA = screen.getByRole("button", { name: "Item A" });
    const triggerB = screen.getByRole("button", { name: "Item B" });

    await userEvent.click(triggerA);
    await userEvent.click(triggerB);

    expect(triggerA).toHaveAttribute("data-state", "open");
    expect(triggerB).toHaveAttribute("data-state", "open");
  });
});
