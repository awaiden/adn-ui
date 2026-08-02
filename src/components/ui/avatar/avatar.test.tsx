import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { AvatarFallback, AvatarImage, AvatarRoot } from "./index";

describe("Avatar component", () => {
  it("renders fallback text when image is loading or absent", () => {
    render(
      <AvatarRoot>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User Avatar" />
        <AvatarFallback>HT</AvatarFallback>
      </AvatarRoot>
    );

    expect(screen.getByText("HT")).toBeInTheDocument();
  });
});
