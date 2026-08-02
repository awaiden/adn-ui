import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { FieldsetLegend, FieldsetRoot } from "./index";

describe("Fieldset component", () => {
  it("renders fieldset group and legend", () => {
    render(
      <FieldsetRoot>
        <FieldsetLegend>Personal Information</FieldsetLegend>
      </FieldsetRoot>
    );

    expect(screen.getByText("Personal Information")).toBeInTheDocument();
  });
});
