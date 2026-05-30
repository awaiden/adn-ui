import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Toolbar } from ".";

afterEach(cleanup);

describe("Toolbar", () => {
  it("renders with toolbar role", () => {
    render(
      <Toolbar.Root>
        <Toolbar.Button>Bold</Toolbar.Button>
        <Toolbar.Separator />
        <Toolbar.Link href="/help">Help</Toolbar.Link>
      </Toolbar.Root>,
    );

    expect(screen.getByRole("toolbar")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Bold" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Help" })).toBeInTheDocument();
  });

  it("renders toggle group items", () => {
    render(
      <Toolbar.Root>
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem value="left">Left</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="center">Center</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar.Root>,
    );

    expect(screen.getByRole("toolbar")).toBeInTheDocument();
    expect(screen.getByText("Left")).toBeInTheDocument();
    expect(screen.getByText("Center")).toBeInTheDocument();
  });
});
