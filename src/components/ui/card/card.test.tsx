import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { CardContent, CardDescription, CardFooter, CardHeader, CardRoot, CardTitle } from "./index";

describe("Card component", () => {
  it("renders header, title, description, content, and footer", () => {
    render(
      <CardRoot>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description text</CardDescription>
        </CardHeader>
        <CardContent>Body content</CardContent>
        <CardFooter>Footer info</CardFooter>
      </CardRoot>
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card description text")).toBeInTheDocument();
    expect(screen.getByText("Body content")).toBeInTheDocument();
    expect(screen.getByText("Footer info")).toBeInTheDocument();
  });
});
