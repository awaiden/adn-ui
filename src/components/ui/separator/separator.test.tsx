import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { SeparatorRoot } from "./index";

describe("Separator component", () => {
  it("renders separator element", () => {
    render(<SeparatorRoot orientation="horizontal" />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});
