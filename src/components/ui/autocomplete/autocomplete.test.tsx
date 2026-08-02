import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { AutocompleteInput, AutocompleteItem, AutocompletePopup, AutocompletePositioner, AutocompletePortal, AutocompleteRoot } from "./index";

describe("Autocomplete component", () => {
  it("renders autocomplete search input", () => {
    render(
      <AutocompleteRoot open={true}>
        <AutocompleteInput placeholder="Search fruit..." />
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteItem value="apple">Apple</AutocompleteItem>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </AutocompleteRoot>
    );

    expect(screen.getByPlaceholderText("Search fruit...")).toBeInTheDocument();
  });
});
