import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { NumberFieldInput, NumberFieldRoot } from "./index";

describe("NumberField component", () => {
  it("renders number input field", () => {
    render(
      <NumberFieldRoot defaultValue={5}>
        <NumberFieldInput />
      </NumberFieldRoot>
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});
