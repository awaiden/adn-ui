import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { Spinner } from "./index";

describe("Spinner component", () => {
  it("renders status SVG with accessibility label", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status", { name: /loading/i });
    expect(spinner).toBeInTheDocument();
  });

  it("applies size and variant classes", () => {
    const { container } = render(<Spinner size="lg" variant="primary" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("spinner--lg");
    expect(svg).toHaveClass("spinner--primary");
  });
});
