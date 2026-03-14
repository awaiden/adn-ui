import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { RadioGroup } from "./index";

describe("RadioGroup", () => {
  test("renders and allows selection", () => {
    render(
      <RadioGroup.Root defaultValue="1">
        <div className="flex items-center gap-2">
          <RadioGroup.Item value="1" id="r1">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <label htmlFor="r1">Option 1</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroup.Item value="2" id="r2">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <label htmlFor="r2">Option 2</label>
        </div>
      </RadioGroup.Root>,
    );

    const option1 = screen.getByLabelText("Option 1");
    const option2 = screen.getByLabelText("Option 2");

    expect(option1).toHaveAttribute("data-state", "checked");
    expect(option2).toHaveAttribute("data-state", "unchecked");

    fireEvent.click(option2);

    expect(option1).toHaveAttribute("data-state", "unchecked");
    expect(option2).toHaveAttribute("data-state", "checked");
  });

  test("handles disabled state", () => {
    render(
      <RadioGroup.Root disabled>
        <RadioGroup.Item value="1" id="r1">
          <RadioGroup.Indicator />
        </RadioGroup.Item>
        <label htmlFor="r1">Option 1</label>
      </RadioGroup.Root>,
    );

    const option1 = screen.getByLabelText("Option 1");
    expect(option1).toBeDisabled();
  });
});
