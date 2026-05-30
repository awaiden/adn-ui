import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { DropdownMenuContent, DropdownMenuItem, DropdownMenuRoot, DropdownMenuTrigger } from ".";

afterEach(cleanup);

describe("DropdownMenu", () => {
  it("opens on trigger click", async () => {
    render(
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <button>Menu</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Menu" }));
    expect(await screen.findByRole("menu")).toBeInTheDocument();
  });

  it("renders menu items", async () => {
    render(
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <button>Open</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    const items = await screen.findAllByRole("menuitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Edit");
  });

  it("supports disabled items", async () => {
    render(
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <button>Open</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    const item = await screen.findByRole("menuitem");
    expect(item).toHaveAttribute("data-disabled", "");
  });
});
