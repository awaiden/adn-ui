import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { Avatar } from ".";

afterEach(cleanup);

describe("Avatar", () => {
  it("renders fallback when no image", () => {
    render(
      <Avatar.Root>
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar.Root>,
    );

    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("renders fallback while image loads", () => {
    render(
      <Avatar.Root>
        <Avatar.Image alt="User" src="https://example.com/avatar.png" />
        <Avatar.Fallback>U</Avatar.Fallback>
      </Avatar.Root>,
    );

    expect(screen.getByText("U")).toBeInTheDocument();
  });

  it("applies size variant", () => {
    const { container } = render(
      <Avatar.Root size="lg">
        <Avatar.Fallback>XL</Avatar.Fallback>
      </Avatar.Root>,
    );

    expect(container.firstChild).toHaveClass("avatar--lg");
  });
});
