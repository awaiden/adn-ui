import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Progress } from ".";

afterEach(cleanup);

describe("Progress", () => {
  it("renders with progressbar role", () => {
    render(<Progress.Root value={50} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("sets aria-valuenow", () => {
    render(<Progress.Root value={75} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "75");
  });

  it("defaults to 0 value", () => {
    render(<Progress.Root value={0} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0");
  });

  it("merges custom className", () => {
    render(<Progress.Root className="custom" value={50} />);
    expect(screen.getByRole("progressbar")).toHaveClass("custom");
  });
});
