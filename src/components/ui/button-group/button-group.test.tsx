import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { ButtonGroupItem, ButtonGroupRoot } from "./index";

describe("ButtonGroup component", () => {
  it("renders group container and child buttons", () => {
    render(
      <ButtonGroupRoot variant="outline" size="sm">
        <ButtonGroupItem>Option A</ButtonGroupItem>
        <ButtonGroupItem>Option B</ButtonGroupItem>
      </ButtonGroupRoot>
    );

    expect(screen.getByRole("group")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /option a/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /option b/i })).toBeInTheDocument();
  });
});
