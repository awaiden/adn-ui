import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CheckboxRoot } from "./checkbox";

afterEach(cleanup);

describe("Checkbox", () => {
  it("renders unchecked by default", () => {
    render(<CheckboxRoot />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "unchecked");
  });

  it("toggles on click", async () => {
    render(<CheckboxRoot />);
    const checkbox = screen.getByRole("checkbox");

    await userEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("data-state", "checked");

    await userEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("data-state", "unchecked");
  });

  it("respects defaultChecked", () => {
    render(<CheckboxRoot defaultChecked />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "checked");
  });

  it("calls onCheckedChange", async () => {
    const onCheckedChange = vi.fn();
    render(<CheckboxRoot onCheckedChange={onCheckedChange} />);

    await userEvent.click(screen.getByRole("checkbox"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("cannot be toggled when disabled", async () => {
    render(<CheckboxRoot disabled />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeDisabled();
    await userEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("data-state", "unchecked");
  });
});
