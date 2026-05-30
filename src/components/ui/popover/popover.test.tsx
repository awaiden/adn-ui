import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { Popover } from ".";

afterEach(cleanup);

describe("Popover", () => {
  it("opens when trigger is clicked", async () => {
    render(
      <Popover.Root>
        <Popover.Trigger asChild>
          <button>Open</button>
        </Popover.Trigger>
        <Popover.Content>Popover body</Popover.Content>
      </Popover.Root>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(await screen.findByText("Popover body")).toBeInTheDocument();
  });

  it("closes when close button is clicked", async () => {
    render(
      <Popover.Root>
        <Popover.Trigger asChild>
          <button>Open</button>
        </Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
      </Popover.Root>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(await screen.findByText("Content")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() => {
      expect(screen.queryByText("Content")).not.toBeInTheDocument();
    });
  });
});
