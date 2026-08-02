import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { OTPFieldInput, OTPFieldRoot, OTPFieldSeparator } from "./index";

describe("OTPField component", () => {
  it("renders input and separator components", () => {
    render(
      <OTPFieldRoot length={6}>
        <OTPFieldInput />
        <OTPFieldSeparator />
      </OTPFieldRoot>
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
