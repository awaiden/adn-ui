import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { CommandInput, CommandItem, CommandList, CommandRoot } from "./index";

describe("Command component", () => {
  it("renders command search input and list", () => {
    render(
      <CommandRoot>
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Profile</CommandItem>
        </CommandList>
      </CommandRoot>
    );

    expect(screen.getByPlaceholderText("Type a command...")).toBeInTheDocument();
    expect(screen.getByText("Calendar")).toBeInTheDocument();
  });
});
