import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { AspectRatio } from ".";

afterEach(cleanup);

describe("AspectRatio", () => {
  it("renders children", () => {
    const { container } = render(
      <AspectRatio.Root ratio={16 / 9}>
        <img alt="test" src="test.jpg" />
      </AspectRatio.Root>,
    );

    expect(container.querySelector("img")).toBeInTheDocument();
  });

  it("renders with correct structure", () => {
    const { container } = render(
      <AspectRatio.Root ratio={16 / 9}>
        <div>Content</div>
      </AspectRatio.Root>,
    );

    expect(container.querySelector("[style]")).toBeInTheDocument();
  });
});
