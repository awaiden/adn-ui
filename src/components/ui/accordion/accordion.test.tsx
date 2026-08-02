import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
} from "./index";

describe("Accordion component", () => {
  it("expands panel content when trigger is clicked", () => {
    render(
      <AccordionRoot defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>Yes, it follows WAI-ARIA guidelines.</AccordionPanel>
        </AccordionItem>
      </AccordionRoot>
    );

    expect(screen.getByRole("button", { name: /is it accessible\?/i })).toBeInTheDocument();
    expect(screen.getByText("Yes, it follows WAI-ARIA guidelines.")).toBeInTheDocument();
  });
});
