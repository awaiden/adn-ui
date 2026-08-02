import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import React from "react";

import { Input } from "./index";

describe("Input component", () => {
  it("renders text input with placeholder", () => {
    render(<Input placeholder="Enter email..." />);
    const input = screen.getByPlaceholderText("Enter email...");
    expect(input).toBeInTheDocument();
  });

  it("handles input change events", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "hello@example.com" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("applies size classes correctly", () => {
    const { container } = render(<Input size="lg" />);
    const input = container.firstChild as HTMLElement;
    expect(input).toHaveClass("input--lg");
  });

  it("disables input when disabled prop is set", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
