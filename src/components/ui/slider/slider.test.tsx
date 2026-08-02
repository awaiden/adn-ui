import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { SliderControl, SliderIndicator, SliderRoot, SliderThumb, SliderTrack, SliderValue } from "./index";

describe("Slider component", () => {
  it("renders slider control and thumb", () => {
    render(
      <SliderRoot defaultValue={50}>
        <SliderValue />
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </SliderRoot>
    );

    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
});
