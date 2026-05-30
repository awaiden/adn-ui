import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Skeleton } from ".";

afterEach(cleanup);

describe("Skeleton", () => {
  it("renders a div", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild?.nodeName).toBe("DIV");
  });

  it("applies skeleton class", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass("skeleton");
  });

  it("merges custom className", () => {
    const { container } = render(<Skeleton className="h-20 w-20" />);
    expect(container.firstChild).toHaveClass("w-20");
  });
});
