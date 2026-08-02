import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { ContextMenuItem, ContextMenuPopup, ContextMenuPositioner, ContextMenuPortal, ContextMenuRoot, ContextMenuTrigger } from "./index";

describe("ContextMenu component", () => {
  it("renders context menu trigger", () => {
    render(
      <ContextMenuRoot open={true}>
        <ContextMenuTrigger>Right click here</ContextMenuTrigger>
        <ContextMenuPortal>
          <ContextMenuPositioner>
            <ContextMenuPopup>
              <ContextMenuItem>Back</ContextMenuItem>
              <ContextMenuItem>Reload</ContextMenuItem>
            </ContextMenuPopup>
          </ContextMenuPositioner>
        </ContextMenuPortal>
      </ContextMenuRoot>
    );

    expect(screen.getByText("Right click here")).toBeInTheDocument();
  });
});
