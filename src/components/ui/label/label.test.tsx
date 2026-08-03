import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { Label, LabelRoot } from "./index";

describe("Label component", () => {
  it("renders label element with children", () => {
    render(<LabelRoot htmlFor="input-id">Email Address</LabelRoot>);

    const label = screen.getByText("Email Address");
    expect(label).toBeInTheDocument();
    expect(label.getAttribute("for")).toBe("input-id");
  });

  it("renders using Label object dot syntax", () => {
    render(<Label.Root htmlFor="username">Username</Label.Root>);

    const label = screen.getByText("Username");
    expect(label).toBeInTheDocument();
    expect(label.getAttribute("for")).toBe("username");
  });
});
