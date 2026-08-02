import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import React from "react";

import { CheckboxIndicator, CheckboxRoot } from "./index";

describe("Checkbox component", () => {
  it("handles state toggle and change handler", () => {
    const handleChange = vi.fn();
    render(
      <CheckboxRoot onCheckedChange={handleChange} aria-label="Accept terms">
        <CheckboxIndicator />
      </CheckboxRoot>
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });
});
