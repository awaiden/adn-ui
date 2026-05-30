import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { RadioGroup } from ".";

afterEach(cleanup);

describe("RadioGroup", () => {
  it("renders radio items", () => {
    render(
      <RadioGroup.Root>
        <RadioGroup.Item value="a" />
        <RadioGroup.Item value="b" />
      </RadioGroup.Root>,
    );

    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });

  it("selects item on click", async () => {
    render(
      <RadioGroup.Root>
        <RadioGroup.Item value="a" />
        <RadioGroup.Item value="b" />
      </RadioGroup.Root>,
    );

    const radios = screen.getAllByRole("radio");
    await userEvent.click(radios[0]);
    expect(radios[0]).toHaveAttribute("data-state", "checked");
    expect(radios[1]).toHaveAttribute("data-state", "unchecked");
  });

  it("respects defaultValue", () => {
    render(
      <RadioGroup.Root defaultValue="b">
        <RadioGroup.Item value="a" />
        <RadioGroup.Item value="b" />
      </RadioGroup.Root>,
    );

    const radios = screen.getAllByRole("radio");
    expect(radios[0]).toHaveAttribute("data-state", "unchecked");
    expect(radios[1]).toHaveAttribute("data-state", "checked");
  });

  it("calls onValueChange", async () => {
    const onValueChange = vi.fn();
    render(
      <RadioGroup.Root onValueChange={onValueChange}>
        <RadioGroup.Item value="a" />
        <RadioGroup.Item value="b" />
      </RadioGroup.Root>,
    );

    await userEvent.click(screen.getAllByRole("radio")[1]);
    expect(onValueChange).toHaveBeenCalledWith("b");
  });
});
