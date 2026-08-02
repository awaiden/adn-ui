import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { CheckboxRoot } from "../checkbox";
import { CheckboxGroupRoot } from "./index";

describe("CheckboxGroup component", () => {
  it("renders checkbox group items", () => {
    render(
      <CheckboxGroupRoot defaultValue={["opt-1"]}>
        <CheckboxRoot value="opt-1" aria-label="Option 1" />
        <CheckboxRoot value="opt-2" aria-label="Option 2" />
      </CheckboxGroupRoot>
    );

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toBe(2);
  });
});
