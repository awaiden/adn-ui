import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { HoverCard } from ".";

afterEach(cleanup);

describe("HoverCard", () => {
  it("renders trigger", () => {
    render(
      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <a href="#">@user</a>
        </HoverCard.Trigger>
        <HoverCard.Content>Profile info</HoverCard.Content>
      </HoverCard.Root>,
    );

    expect(screen.getByText("@user")).toBeInTheDocument();
  });
});
