import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { Textarea } from ".";

afterEach(cleanup);

describe("Textarea", () => {
  it("renders a textarea element", () => {
    render(<Textarea placeholder="Write here" />);
    expect(screen.getByPlaceholderText("Write here")).toBeInTheDocument();
  });

  it("handles user input", async () => {
    render(<Textarea placeholder="Type" />);
    const textarea = screen.getByPlaceholderText("Type");

    await userEvent.type(textarea, "multiline\ntext");
    expect(textarea).toHaveValue("multiline\ntext");
  });

  it("supports disabled state", () => {
    render(<Textarea disabled placeholder="No edit" />);
    expect(screen.getByPlaceholderText("No edit")).toBeDisabled();
  });

  it("merges custom className", () => {
    render(<Textarea className="custom" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("custom");
  });
});
