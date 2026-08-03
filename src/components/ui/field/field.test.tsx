import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldPrefix,
  FieldRoot,
  FieldSuffix,
} from "./index";

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

  it("renders group component with field prefix, control, and suffix", () => {
    render(
      <FieldRoot>
        <FieldLabel>Website</FieldLabel>
        <FieldGroup>
          <FieldPrefix>https://</FieldPrefix>
          <FieldControl placeholder="example.com" />
          <FieldSuffix>.com</FieldSuffix>
        </FieldGroup>
      </FieldRoot>
    );

    expect(screen.getByText("Website")).toBeInTheDocument();
    expect(screen.getByRole("group")).toBeInTheDocument();
    expect(screen.getByText("https://")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("example.com")).toBeInTheDocument();
    expect(screen.getByText(".com")).toBeInTheDocument();
  });

  it("renders group using Field object dot syntax", () => {
    render(
      <Field.Root size="sm">
        <Field.Label>Amount</Field.Label>
        <Field.Group>
          <Field.Prefix>$</Field.Prefix>
          <Field.Control placeholder="0.00" />
          <Field.Suffix>USD</Field.Suffix>
        </Field.Group>
      </Field.Root>
    );

    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByRole("group")).toBeInTheDocument();
    expect(screen.getByText("$")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("0.00")).toBeInTheDocument();
    expect(screen.getByText("USD")).toBeInTheDocument();
  });

  it("renders custom textarea and native select via FieldControl render prop", () => {
    render(
      <Field.Root>
        <Field.Label>Bio</Field.Label>
        <Field.Control render={<textarea placeholder="Tell us about yourself..." />} />
        <Field.Label>Country</Field.Label>
        <Field.Control
          render={
            <select data-testid="country-select">
              <option value="us">United States</option>
              <option value="ca">Canada</option>
            </select>
          }
        />
      </Field.Root>
    );

    expect(screen.getByPlaceholderText("Tell us about yourself...")).toBeInTheDocument();
    expect(screen.getByTestId("country-select")).toBeInTheDocument();
    expect(screen.getByText("United States")).toBeInTheDocument();
  });
});




