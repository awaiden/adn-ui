import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { Select } from ".";

afterEach(cleanup);

describe("Select", () => {
  it("renders trigger with placeholder", () => {
    render(
      <Select.Root>
        <Select.Trigger>
          <span>Pick one</span>
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="a">Option A</Select.Item>
          <Select.Item value="b">Option B</Select.Item>
        </Select.Content>
      </Select.Root>,
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Pick one")).toBeInTheDocument();
  });

  it("opens on trigger click", async () => {
    render(
      <Select.Root>
        <Select.Trigger>
          <span>Select</span>
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="a">Option A</Select.Item>
        </Select.Content>
      </Select.Root>,
    );

    await userEvent.click(screen.getByRole("combobox"));
    expect(await screen.findByRole("listbox")).toBeInTheDocument();
  });

  it("renders items in listbox", async () => {
    render(
      <Select.Root>
        <Select.Trigger>
          <span>Choose</span>
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="a">Apple</Select.Item>
          <Select.Item value="b">Banana</Select.Item>
        </Select.Content>
      </Select.Root>,
    );

    await userEvent.click(screen.getByRole("combobox"));
    expect(await screen.findByRole("option", { name: "Apple" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Banana" })).toBeInTheDocument();
  });
});
