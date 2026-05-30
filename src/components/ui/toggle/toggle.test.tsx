import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Toggle } from ".";

afterEach(cleanup);

describe("Toggle", () => {
  it("renders a button", () => {
    render(<Toggle.Root aria-label="Bold">B</Toggle.Root>);
    expect(screen.getByRole("button", { name: "Bold" })).toBeInTheDocument();
  });

  it("toggles pressed state on click", async () => {
    render(<Toggle.Root aria-label="Bold">B</Toggle.Root>);
    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("data-state", "off");
    await userEvent.click(button);
    expect(button).toHaveAttribute("data-state", "on");
    await userEvent.click(button);
    expect(button).toHaveAttribute("data-state", "off");
  });

  it("respects defaultPressed", () => {
    render(
      <Toggle.Root aria-label="Bold" defaultPressed>
        B
      </Toggle.Root>,
    );
    expect(screen.getByRole("button")).toHaveAttribute("data-state", "on");
  });

  it("calls onPressedChange", async () => {
    const onPressedChange = vi.fn();
    render(
      <Toggle.Root aria-label="Bold" onPressedChange={onPressedChange}>
        B
      </Toggle.Root>,
    );

    await userEvent.click(screen.getByRole("button"));
    expect(onPressedChange).toHaveBeenCalledWith(true);
  });

  it("does not toggle when disabled", async () => {
    render(
      <Toggle.Root aria-label="Bold" disabled>
        B
      </Toggle.Root>,
    );
    const button = screen.getByRole("button");

    await userEvent.click(button);
    expect(button).toHaveAttribute("data-state", "off");
  });
});
