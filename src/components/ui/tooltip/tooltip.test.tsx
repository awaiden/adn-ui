import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { TooltipPopup, TooltipPositioner, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from "./index";

describe("Tooltip component", () => {
  it("renders tooltip trigger element", () => {
    render(
      <TooltipProvider>
        <TooltipRoot open={true}>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipPortal>
            <TooltipPositioner>
              <TooltipPopup>Tooltip info</TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        </TooltipRoot>
      </TooltipProvider>
    );

    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });
});
