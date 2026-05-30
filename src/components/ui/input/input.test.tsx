import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Input } from ".";

afterEach(cleanup);

describe("Input", () => {
  it("renders an input element", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("handles user input", async () => {
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText("Type here");

    await userEvent.type(input, "hello");
    expect(input).toHaveValue("hello");
  });

  it("calls onChange", async () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} placeholder="Input" />);

    await userEvent.type(screen.getByPlaceholderText("Input"), "a");
    expect(onChange).toHaveBeenCalled();
  });

  it("supports disabled state", () => {
    render(<Input disabled placeholder="Disabled" />);
    expect(screen.getByPlaceholderText("Disabled")).toBeDisabled();
  });

  it("merges custom className", () => {
    render(<Input className="custom" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("custom");
  });
});
