import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { MenuItem, MenuPopup, MenuPositioner, MenuPortal, MenuRoot, MenuTrigger } from "./index";

describe("Menu component", () => {
  it("renders dropdown menu items when open", () => {
    render(
      <MenuRoot open={true}>
        <MenuTrigger>Options</MenuTrigger>
        <MenuPortal>
          <MenuPositioner>
            <MenuPopup>
              <MenuItem>Account settings</MenuItem>
              <MenuItem>Sign out</MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>
    );

    expect(screen.getByText("Account settings")).toBeInTheDocument();
    expect(screen.getByText("Sign out")).toBeInTheDocument();
  });
});
