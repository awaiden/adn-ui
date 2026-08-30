import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { Progress, ProgressIndicator, ProgressRoot } from "./index";

describe("Progress component", () => {
  it("renders progress bar with value", () => {
    render(
      <ProgressRoot value={60} aria-label="Upload progress">
        <ProgressIndicator />
      </ProgressRoot>,
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders progress with standalone component syntax", () => {
    render(<Progress value={75} label="Loading" aria-label="Progress" />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("applies variant indicator styling", () => {
    const { container } = render(
      <Progress value={50} variant="destructive" aria-label="Progress">
        <ProgressIndicator />
      </Progress>,
    );

    const indicator = container.querySelector(".progress__indicator");
    expect(indicator).toHaveClass("progress__indicator--destructive");
  });
});
