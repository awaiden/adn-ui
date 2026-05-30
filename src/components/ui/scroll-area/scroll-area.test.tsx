import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ScrollArea } from ".";

afterEach(cleanup);

describe("ScrollArea", () => {
  it("renders children", () => {
    render(
      <ScrollArea.Root className="h-48">
        <p>Scrollable content</p>
      </ScrollArea.Root>,
    );

    expect(screen.getByText("Scrollable content")).toBeInTheDocument();
  });

  it("merges custom className", () => {
    const { container } = render(
      <ScrollArea.Root className="custom-scroll">
        <p>Content</p>
      </ScrollArea.Root>,
    );

    expect(container.firstChild).toHaveClass("custom-scroll");
  });
});
