import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Slider } from ".";

afterEach(cleanup);

describe("Slider", () => {
  it("renders with slider role", () => {
    render(<Slider.Root defaultValue={[50]} />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("sets aria-valuenow from defaultValue", () => {
    render(<Slider.Root defaultValue={[30]} />);
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "30");
  });

  it("respects min and max", () => {
    render(<Slider.Root defaultValue={[5]} max={10} min={0} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuemin", "0");
    expect(slider).toHaveAttribute("aria-valuemax", "10");
  });

  it("merges custom className", () => {
    const { container } = render(<Slider.Root className="custom" defaultValue={[50]} />);
    expect(container.firstChild).toHaveClass("custom");
  });
});
