import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { CollapsiblePanel, CollapsibleRoot, CollapsibleTrigger } from "./index";

describe("Collapsible component", () => {
  it("toggles collapsible content when trigger is clicked", () => {
    render(
      <CollapsibleRoot defaultOpen={true}>
        <CollapsibleTrigger>Toggle Details</CollapsibleTrigger>
        <CollapsiblePanel>Hidden details content</CollapsiblePanel>
      </CollapsibleRoot>
    );

    const trigger = screen.getByRole("button", { name: /toggle details/i });
    expect(trigger).toBeInTheDocument();
    expect(screen.getByText("Hidden details content")).toBeInTheDocument();
  });
});
