import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { ToggleGroup } from ".";

afterEach(cleanup);

describe("ToggleGroup", () => {
  it("renders items", () => {
    render(
      <ToggleGroup.Root type="single">
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      </ToggleGroup.Root>,
    );

    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });

  it("selects an item on click (single)", async () => {
    render(
      <ToggleGroup.Root type="single">
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      </ToggleGroup.Root>,
    );

    const items = screen.getAllByRole("radio");
    await userEvent.click(items[0]);
    expect(items[0]).toHaveAttribute("data-state", "on");
    expect(items[1]).toHaveAttribute("data-state", "off");
  });

  it("allows multiple selections", async () => {
    render(
      <ToggleGroup.Root type="multiple">
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      </ToggleGroup.Root>,
    );

    const items = screen.getAllByRole("button");
    await userEvent.click(items[0]);
    await userEvent.click(items[1]);
    expect(items[0]).toHaveAttribute("data-state", "on");
    expect(items[1]).toHaveAttribute("data-state", "on");
  });

  it("respects defaultValue", () => {
    render(
      <ToggleGroup.Root defaultValue="b" type="single">
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      </ToggleGroup.Root>,
    );

    const items = screen.getAllByRole("radio");
    expect(items[0]).toHaveAttribute("data-state", "off");
    expect(items[1]).toHaveAttribute("data-state", "on");
  });
});
