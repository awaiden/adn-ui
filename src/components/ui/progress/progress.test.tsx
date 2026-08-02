import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { ProgressIndicator, ProgressRoot } from "./index";

describe("Progress component", () => {
  it("renders progress bar with value", () => {
    render(
      <ProgressRoot value={60} aria-label="Upload progress">
        <ProgressIndicator />
      </ProgressRoot>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
