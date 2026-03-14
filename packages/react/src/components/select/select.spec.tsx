import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from ".";

function renderSelect({
  defaultValue,
  disabled,
  placeholder = "Select an option",
}: {
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
} = {}) {
  return render(
    <Select.Root defaultValue={defaultValue} disabled={disabled}>
      <Select.Trigger>
        <Select.Value placeholder={placeholder} />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
      </Select.Content>
    </Select.Root>,
  );
}

describe("Select", () => {
  describe("rendering", () => {
    test("renders trigger with placeholder", () => {
      renderSelect();

      expect(screen.getByText("Select an option")).toBeInTheDocument();
    });

    test("applies data-slot to trigger", () => {
      const { container } = renderSelect();

      const trigger = container.querySelector('[data-slot="select-trigger"]');
      expect(trigger as HTMLElement).toBeInTheDocument();
    });

    test("applies base CSS class to trigger", () => {
      const { container } = renderSelect();

      const trigger = container.querySelector('[data-slot="select-trigger"]');
      expect(trigger as HTMLElement).toHaveClass("select__trigger");
    });

    test("applies custom className to trigger", () => {
      const { container } = render(
        <Select.Root>
          <Select.Trigger className="custom-trigger">
            <Select.Value placeholder="Pick" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="a">A</Select.Item>
          </Select.Content>
        </Select.Root>,
      );

      const trigger = container.querySelector('[data-slot="select-trigger"]');
      expect(trigger as HTMLElement).toHaveClass("select__trigger");
      expect(trigger as HTMLElement).toHaveClass("custom-trigger");
    });

    test("renders with defaultValue selected", async () => {
      renderSelect({
        defaultValue: "banana",
      });

      expect(screen.getByText("Banana")).toBeInTheDocument();
    });
  });

  describe("open/close behavior", () => {
    test("opens dropdown on trigger click", () => {
      renderSelect();

      fireEvent.click(screen.getByText("Select an option"));

      const content = document.querySelector('[data-slot="select-content"]');
      expect(content as HTMLElement).toBeInTheDocument();
    });

    test("shows items when opened", () => {
      renderSelect();

      fireEvent.click(screen.getByText("Select an option"));

      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
      expect(screen.getByText("Cherry")).toBeInTheDocument();
    });

    test("selects item on click", () => {
      renderSelect();

      fireEvent.click(screen.getByText("Select an option"));
      fireEvent.click(screen.getByText("Apple"));

      expect(screen.getByText("Apple")).toBeInTheDocument();
    });
  });

  describe("disabled", () => {
    test("trigger has data-disabled when disabled", () => {
      const { container } = renderSelect({ disabled: true });

      const trigger = container.querySelector('[data-slot="select-trigger"]');
      expect(trigger as HTMLElement).toHaveAttribute("data-disabled", "");
    });

    test("trigger is disabled when disabled", () => {
      const { container } = renderSelect({ disabled: true });

      const trigger = container.querySelector('[data-slot="select-trigger"]');
      expect(trigger as HTMLElement).toBeDisabled();
    });
  });

  describe("groups and labels", () => {
    test("renders groups with labels", () => {
      render(
        <Select.Root>
          <Select.Trigger>
            <Select.Value placeholder="Pick" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value="apple">Apple</Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Vegetables</Select.Label>
              <Select.Item value="carrot">Carrot</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>,
      );

      fireEvent.click(screen.getByText("Pick"));

      expect(screen.getByText("Fruits")).toBeInTheDocument();
      expect(screen.getByText("Vegetables")).toBeInTheDocument();
      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Carrot")).toBeInTheDocument();
    });
  });

  describe("disabled items", () => {
    test("disabled item has data-disabled attribute", () => {
      render(
        <Select.Root>
          <Select.Trigger>
            <Select.Value placeholder="Pick" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana" disabled>
              Banana
            </Select.Item>
          </Select.Content>
        </Select.Root>,
      );

      fireEvent.click(screen.getByText("Pick"));

      const disabledItem = document.querySelector('[data-slot="select-item"][data-disabled]');
      expect(disabledItem as HTMLElement).toBeInTheDocument();
    });
  });

  describe("compound export", () => {
    test("named exports are available", () => {
      expect(SelectRoot).toBeDefined();
      expect(SelectTrigger).toBeDefined();
      expect(SelectValue).toBeDefined();
      expect(SelectContent).toBeDefined();
      expect(SelectItem).toBeDefined();
      expect(SelectGroup).toBeDefined();
      expect(SelectLabel).toBeDefined();
      expect(SelectSeparator).toBeDefined();
    });

    test("Select compound object has all parts", () => {
      expect(Select.Root).toBe(SelectRoot);
      expect(Select.Trigger).toBe(SelectTrigger);
      expect(Select.Value).toBe(SelectValue);
      expect(Select.Content).toBe(SelectContent);
      expect(Select.Item).toBe(SelectItem);
      expect(Select.Group).toBe(SelectGroup);
      expect(Select.Label).toBe(SelectLabel);
      expect(Select.Separator).toBe(SelectSeparator);
    });
  });
});
