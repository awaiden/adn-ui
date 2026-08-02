import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { ComboboxInput, ComboboxItem, ComboboxPopup, ComboboxPositioner, ComboboxPortal, ComboboxRoot } from "./index";

describe("Combobox component", () => {
  it("renders input element", () => {
    render(
      <ComboboxRoot open={true}>
        <ComboboxInput placeholder="Select framework..." />
        <ComboboxPortal>
          <ComboboxPositioner>
            <ComboboxPopup>
              <ComboboxItem value="next">Next.js</ComboboxItem>
              <ComboboxItem value="react">React</ComboboxItem>
            </ComboboxPopup>
          </ComboboxPositioner>
        </ComboboxPortal>
      </ComboboxRoot>
    );

    expect(screen.getByPlaceholderText("Select framework...")).toBeInTheDocument();
  });
});
