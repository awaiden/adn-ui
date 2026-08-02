import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { ScrollAreaContent, ScrollAreaRoot, ScrollAreaViewport } from "./index";

describe("ScrollArea component", () => {
  it("renders scrollable viewport and content", () => {
    render(
      <ScrollAreaRoot>
        <ScrollAreaViewport>
          <ScrollAreaContent>Scrollable item list</ScrollAreaContent>
        </ScrollAreaViewport>
      </ScrollAreaRoot>
    );

    expect(screen.getByText("Scrollable item list")).toBeInTheDocument();
  });
});
