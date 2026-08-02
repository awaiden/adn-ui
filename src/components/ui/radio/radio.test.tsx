import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { RadioGroupRoot, RadioIndicator, RadioItem } from "./index";

describe("Radio component", () => {
  it("renders radio group and items", () => {
    render(
      <RadioGroupRoot defaultValue="opt-1">
        <RadioItem value="opt-1" aria-label="Option 1">
          <RadioIndicator />
        </RadioItem>
        <RadioItem value="opt-2" aria-label="Option 2">
          <RadioIndicator />
        </RadioItem>
      </RadioGroupRoot>
    );

    const radioButtons = screen.getAllByRole("radio");
    expect(radioButtons.length).toBe(2);
  });
});
