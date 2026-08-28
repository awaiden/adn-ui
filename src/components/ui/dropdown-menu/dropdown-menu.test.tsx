import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { DropdownMenuItem, DropdownMenuPopup, DropdownMenuPositioner, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from "./index";

describe("DropdownMenu component", () => {
  it("renders dropdown menu items when open", () => {
    render(
      <DropdownMenuRoot open={true}>
        <DropdownMenuTrigger>Options</DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuPositioner>
            <DropdownMenuPopup>
              <DropdownMenuItem>Account settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuPopup>
          </DropdownMenuPositioner>
        </DropdownMenuPortal>
      </DropdownMenuRoot>
    );

    expect(screen.getByText("Account settings")).toBeInTheDocument();
    expect(screen.getByText("Sign out")).toBeInTheDocument();
  });
});
