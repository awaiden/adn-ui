import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { AspectRatio } from "./index";

describe("AspectRatio component", () => {
  it("applies inline style aspectRatio based on ratio prop", () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>
        <div>Content</div>
      </AspectRatio>
    );

    const el = container.firstChild as HTMLElement;
    expect(el).toHaveStyle({ aspectRatio: "1.7777777777777777" });
    expect(el).toHaveClass("aspect-ratio");
  });
});
