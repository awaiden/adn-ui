import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import React from "react";

import { SwitchRoot, SwitchThumb } from "./index";

describe("Switch component", () => {
  it("toggles checked state and calls onCheckedChange", () => {
    const handleChange = vi.fn();
    render(
      <SwitchRoot onCheckedChange={handleChange} aria-label="Enable notifications">
        <SwitchThumb />
      </SwitchRoot>
    );

    const switchEl = screen.getByRole("switch");
    expect(switchEl).toBeInTheDocument();
    fireEvent.click(switchEl);
    expect(handleChange).toHaveBeenCalled();
  });
});
