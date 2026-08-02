import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import React from "react";

import { TextareaRoot } from "./index";

describe("Textarea component", () => {
  it("renders multiline input and handles text entry", () => {
    const handleChange = vi.fn();
    render(<TextareaRoot placeholder="Enter feedback..." onChange={handleChange} />);

    const textarea = screen.getByPlaceholderText("Enter feedback...");
    expect(textarea).toBeInTheDocument();
    fireEvent.change(textarea, { target: { value: "Great UI components!" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
