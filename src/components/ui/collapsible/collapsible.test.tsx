import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { Collapsible } from ".";

afterEach(cleanup);

describe("Collapsible", () => {
  it("hides content by default", () => {
    const { container } = render(
      <Collapsible.Root>
        <Collapsible.Trigger>
          <button>Toggle</button>
        </Collapsible.Trigger>
        <Collapsible.Content>Hidden content</Collapsible.Content>
      </Collapsible.Root>,
    );

    expect(container.querySelector("[data-state='closed']")).toBeInTheDocument();
  });

  it("shows content when opened", async () => {
    render(
      <Collapsible.Root>
        <Collapsible.Trigger>
          <button>Toggle</button>
        </Collapsible.Trigger>
        <Collapsible.Content>Revealed</Collapsible.Content>
      </Collapsible.Root>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Toggle" }));
    expect(screen.getByText("Revealed")).toBeInTheDocument();
  });

  it("respects defaultOpen", () => {
    render(
      <Collapsible.Root defaultOpen>
        <Collapsible.Trigger>
          <button>Toggle</button>
        </Collapsible.Trigger>
        <Collapsible.Content>Visible</Collapsible.Content>
      </Collapsible.Root>,
    );

    expect(screen.getByText("Visible")).toBeInTheDocument();
  });
});
