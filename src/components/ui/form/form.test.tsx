import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Form } from ".";

afterEach(cleanup);

describe("Form", () => {
  it("renders form element with fields", () => {
    const { container } = render(
      <Form.Root>
        <Form.Field name="email">
          <Form.Label>Email</Form.Label>
          <Form.Control asChild>
            <input placeholder="Enter email" type="email" />
          </Form.Control>
          <Form.Message match="valueMissing">Required</Form.Message>
        </Form.Field>
        <Form.Submit>
          <button>Submit</button>
        </Form.Submit>
      </Form.Root>,
    );

    expect(container.querySelector("form")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });
});
