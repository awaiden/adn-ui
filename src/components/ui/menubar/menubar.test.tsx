import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { MenubarContent, MenubarItem, MenubarMenu, MenubarRoot, MenubarTrigger } from ".";

afterEach(cleanup);

describe("Menubar", () => {
  it("renders menubar with triggers", () => {
    render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </MenubarRoot>,
    );

    expect(screen.getByRole("menubar")).toBeInTheDocument();
    expect(screen.getByText("File")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });

  it("opens menu on trigger click", async () => {
    render(
      <MenubarRoot>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
            <MenubarItem>Open</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </MenubarRoot>,
    );

    await userEvent.click(screen.getByText("File"));
    expect(await screen.findByRole("menu")).toBeInTheDocument();
    expect(screen.getByText("New File")).toBeInTheDocument();
  });
});
