import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Label } from ".";

afterEach(cleanup);

describe("Label", () => {
  it("renders text content", () => {
    render(<Label.Root>Username</Label.Root>);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("associates with input via htmlFor", () => {
    render(
      <>
        <Label.Root htmlFor="email">Email</Label.Root>
        <input id="email" />
      </>,
    );

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("merges custom className", () => {
    render(<Label.Root className="custom">Test</Label.Root>);
    expect(screen.getByText("Test")).toHaveClass("custom");
  });
});
