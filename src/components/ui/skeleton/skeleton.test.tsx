import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { Skeleton } from "./index";

describe("Skeleton component", () => {
  it("renders animated loading placeholder", () => {
    const { container } = render(<Skeleton className="h-4 w-32" />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass("skeleton");
  });
});
