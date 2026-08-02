import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { SelectItem, SelectPopup, SelectPositioner, SelectPortal, SelectRoot, SelectTrigger, SelectValue } from "./index";

describe("Select component", () => {
  it("renders select trigger and popup items when open", () => {
    render(
      <SelectRoot open={true}>
        <SelectTrigger>
          <SelectValue placeholder="Select fruit..." />
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </SelectRoot>
    );

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });
});
