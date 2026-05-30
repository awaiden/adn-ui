import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Separator } from ".";

afterEach(cleanup);

describe("Separator", () => {
  it("renders with separator role", () => {
    render(<Separator.Root />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders horizontal by default", () => {
    render(<Separator.Root />);
    expect(screen.getByRole("separator")).toHaveAttribute("data-orientation", "horizontal");
  });

  it("supports vertical orientation", () => {
    render(<Separator.Root orientation="vertical" />);
    expect(screen.getByRole("separator")).toHaveAttribute("data-orientation", "vertical");
  });

  it("merges custom className", () => {
    render(<Separator.Root className="custom" />);
    expect(screen.getByRole("separator")).toHaveClass("custom");
  });
});
