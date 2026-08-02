import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { FormRoot } from "./index";

describe("Form component", () => {
  it("renders form container", () => {
    render(
      <FormRoot aria-label="Registration Form">
        <button type="submit">Submit</button>
      </FormRoot>
    );

    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});
