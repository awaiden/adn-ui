import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { FieldDescription, FieldError, FieldLabel, FieldRoot } from "./index";

describe("Field component", () => {
  it("renders field label and helper description", () => {
    render(
      <FieldRoot>
        <FieldLabel>Email</FieldLabel>
        <FieldDescription>Enter your work email</FieldDescription>
        <FieldError>Invalid email address</FieldError>
      </FieldRoot>
    );

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Enter your work email")).toBeInTheDocument();
  });
});
