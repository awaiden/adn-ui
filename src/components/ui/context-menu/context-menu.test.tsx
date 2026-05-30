import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ContextMenuContent, ContextMenuItem, ContextMenuRoot, ContextMenuTrigger } from ".";

afterEach(cleanup);

describe("ContextMenu", () => {
  it("renders trigger content", () => {
    render(
      <ContextMenuRoot>
        <ContextMenuTrigger>Right click me</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Copy</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenuRoot>,
    );

    expect(screen.getByText("Right click me")).toBeInTheDocument();
  });
});
