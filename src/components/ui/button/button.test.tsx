import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./index";

describe("Button component", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies variant and size classes", () => {
    const { container } = render(
      <Button variant="destructive" size="sm">
        Delete
      </Button>,
    );
    const button = container.firstChild as HTMLElement;
    expect(button).toHaveClass("button--destructive");
    expect(button).toHaveClass("button--sm");
  });

  it("applies icon-only class when isIconOnly is true", () => {
    const { container } = render(<Button isIconOnly>Icon</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button).toHaveClass("button--icon-only");
  });

  it("respects disabled attribute", () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
