import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { PopoverDescription, PopoverPopup, PopoverPositioner, PopoverPortal, PopoverRoot, PopoverTitle, PopoverTrigger } from "./index";

describe("Popover component", () => {
  it("renders popover content when open", () => {
    render(
      <PopoverRoot open={true}>
        <PopoverTrigger>Open Info</PopoverTrigger>
        <PopoverPortal>
          <PopoverPositioner>
            <PopoverPopup>
              <PopoverTitle>Information</PopoverTitle>
              <PopoverDescription>Detailed popover description</PopoverDescription>
            </PopoverPopup>
          </PopoverPositioner>
        </PopoverPortal>
      </PopoverRoot>
    );

    expect(screen.getByText("Information")).toBeInTheDocument();
    expect(screen.getByText("Detailed popover description")).toBeInTheDocument();
  });
});
