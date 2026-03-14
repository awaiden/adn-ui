import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { AspectRatio } from "./index";

describe("AspectRatio", () => {
  test("renders with base class", () => {
    render(
      <AspectRatio ratio={16 / 9} data-testid="aspect-ratio">
        <div data-testid="child">Child</div>
      </AspectRatio>,
    );
    const aspectRatio = screen.getByTestId("aspect-ratio");

    expect(aspectRatio).toBeInTheDocument();
    expect(aspectRatio).toHaveClass("aspect-ratio");
  });

  test("renders children", () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <div data-testid="child">Child Content</div>
      </AspectRatio>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByTestId("child")).toHaveTextContent("Child Content");
  });

  test("applies custom className alongside base class", () => {
    render(
      <AspectRatio ratio={16 / 9} className="custom-class" data-testid="aspect-ratio">
        <div>Child</div>
      </AspectRatio>,
    );
    const aspectRatio = screen.getByTestId("aspect-ratio");

    expect(aspectRatio).toHaveClass("aspect-ratio");
    expect(aspectRatio).toHaveClass("custom-class");
  });

  test("forwards data attributes", () => {
    render(
      <AspectRatio ratio={16 / 9} data-custom="true" data-testid="aspect-ratio">
        <div>Child</div>
      </AspectRatio>,
    );
    expect(screen.getByTestId("aspect-ratio")).toHaveAttribute("data-custom", "true");
  });
});
