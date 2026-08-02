import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { ToggleGroupItem, ToggleGroupRoot } from "./index";

describe("ToggleGroup component", () => {
  it("renders toggle group and items", () => {
    render(
      <ToggleGroupRoot defaultValue={["bold"]}>
        <ToggleGroupItem value="bold" aria-label="Bold text">
          B
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic text">
          I
        </ToggleGroupItem>
      </ToggleGroupRoot>
    );

    const items = screen.getAllByRole("button");
    expect(items.length).toBe(2);
  });
});
