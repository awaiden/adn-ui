import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { PreviewCardPopup, PreviewCardPositioner, PreviewCardPortal, PreviewCardRoot, PreviewCardTrigger } from "./index";

describe("PreviewCard component", () => {
  it("renders preview card trigger", () => {
    render(
      <PreviewCardRoot open={true}>
        <PreviewCardTrigger href="#">@awaiden</PreviewCardTrigger>
        <PreviewCardPortal>
          <PreviewCardPositioner>
            <PreviewCardPopup>User Profile Card</PreviewCardPopup>
          </PreviewCardPositioner>
        </PreviewCardPortal>
      </PreviewCardRoot>
    );

    expect(screen.getByText("@awaiden")).toBeInTheDocument();
  });
});
