import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { Badge } from "./index";

describe("Badge component", () => {
  it("renders badge text and applies variant classes", () => {
    const { container } = render(<Badge variant="destructive">New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass("bg-destructive");
  });
});
