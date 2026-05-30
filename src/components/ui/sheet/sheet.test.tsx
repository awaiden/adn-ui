import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { Sheet } from ".";

afterEach(cleanup);

describe("Sheet", () => {
  it("opens from the right by default", async () => {
    render(
      <Sheet.Root>
        <Sheet.Trigger asChild>
          <button>Open</button>
        </Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Sheet Title</Sheet.Title>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet.Root>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveClass("sheet__content--right");
  });

  it("opens from the bottom with handle", async () => {
    render(
      <Sheet.Root>
        <Sheet.Trigger asChild>
          <button>Open</button>
        </Sheet.Trigger>
        <Sheet.Content side="bottom">
          <Sheet.Header>
            <Sheet.Title>Bottom Sheet</Sheet.Title>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet.Root>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveClass("sheet__content--bottom");
  });

  it("opens from the top", async () => {
    render(
      <Sheet.Root>
        <Sheet.Trigger asChild>
          <button>Open</button>
        </Sheet.Trigger>
        <Sheet.Content side="top">
          <Sheet.Header>
            <Sheet.Title>Top Sheet</Sheet.Title>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet.Root>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveClass("sheet__content--top");
  });

  it("closes when close button is clicked", async () => {
    render(
      <Sheet.Root>
        <Sheet.Trigger asChild>
          <button>Open</button>
        </Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Title</Sheet.Title>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet.Root>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(await screen.findByRole("dialog")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
