import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import React from "react";

import { ToggleRoot } from "./index";

describe("Toggle component", () => {
  it("handles toggle button state", () => {
    const handlePressedChange = vi.fn();
    render(
      <ToggleRoot onPressedChange={handlePressedChange} aria-label="Toggle bookmark">
        Bookmark
      </ToggleRoot>
    );

    const button = screen.getByRole("button", { name: /toggle bookmark/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handlePressedChange).toHaveBeenCalled();
  });
});
