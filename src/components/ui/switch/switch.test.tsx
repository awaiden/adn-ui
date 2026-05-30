import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { SwitchRoot } from "./switch";

afterEach(cleanup);

describe("Switch", () => {
  it("renders unchecked by default", () => {
    render(<SwitchRoot />);
    expect(screen.getByRole("switch")).toHaveAttribute("data-state", "unchecked");
  });

  it("toggles on click", async () => {
    render(<SwitchRoot />);
    const switchEl = screen.getByRole("switch");

    await userEvent.click(switchEl);
    expect(switchEl).toHaveAttribute("data-state", "checked");

    await userEvent.click(switchEl);
    expect(switchEl).toHaveAttribute("data-state", "unchecked");
  });

  it("respects defaultChecked", () => {
    render(<SwitchRoot defaultChecked />);
    expect(screen.getByRole("switch")).toHaveAttribute("data-state", "checked");
  });

  it("calls onCheckedChange", async () => {
    const onCheckedChange = vi.fn();
    render(<SwitchRoot onCheckedChange={onCheckedChange} />);

    await userEvent.click(screen.getByRole("switch"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("cannot be toggled when disabled", async () => {
    render(<SwitchRoot disabled />);
    const switchEl = screen.getByRole("switch");

    expect(switchEl).toBeDisabled();
    await userEvent.click(switchEl);
    expect(switchEl).toHaveAttribute("data-state", "unchecked");
  });
});
