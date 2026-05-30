import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Alert } from ".";

afterEach(cleanup);

describe("Alert", () => {
  it("renders with role alert", () => {
    render(
      <Alert.Root>
        <Alert.Title>Heads up!</Alert.Title>
        <Alert.Description>Something happened.</Alert.Description>
      </Alert.Root>,
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Heads up!")).toBeInTheDocument();
    expect(screen.getByText("Something happened.")).toBeInTheDocument();
  });

  it("applies variant class", () => {
    render(
      <Alert.Root variant="destructive">
        <Alert.Title>Error</Alert.Title>
      </Alert.Root>,
    );

    expect(screen.getByRole("alert")).toHaveClass("alert--destructive");
  });

  it("merges custom className", () => {
    render(
      <Alert.Root className="custom">
        <Alert.Title>Test</Alert.Title>
      </Alert.Root>,
    );

    expect(screen.getByRole("alert")).toHaveClass("custom");
  });
});
