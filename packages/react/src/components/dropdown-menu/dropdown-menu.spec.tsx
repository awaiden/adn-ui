import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from ".";

function renderDropdownMenu() {
  return render(
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Actions</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Item>Settings</DropdownMenu.Item>
        <DropdownMenu.Item disabled>Disabled Item</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>,
  );
}

describe("DropdownMenu", () => {
  describe("rendering", () => {
    test("renders trigger", () => {
      renderDropdownMenu();

      expect(screen.getByText("Open Menu")).toBeInTheDocument();
    });

    test("applies data-slot to trigger", () => {
      const { container } = renderDropdownMenu();

      const trigger = container.querySelector('[data-slot="dropdown-menu-trigger"]');
      expect(trigger as HTMLElement).toBeInTheDocument();
    });
  });

  describe("open/close behavior", () => {
    test("opens dropdown on trigger click", async () => {
      renderDropdownMenu();

      const trigger = screen.getByText("Open Menu");
      fireEvent.pointerDown(trigger, { button: 0 });
      fireEvent.pointerUp(trigger, { button: 0 });
      fireEvent.click(trigger);

      const content = await screen.findByRole("menu");
      expect(content).toBeInTheDocument();
    });

    test("shows items when opened", async () => {
      renderDropdownMenu();

      const trigger = screen.getByText("Open Menu");
      fireEvent.pointerDown(trigger, { button: 0 });
      fireEvent.pointerUp(trigger, { button: 0 });
      fireEvent.click(trigger);

      expect(await screen.findByText("Profile")).toBeInTheDocument();
      expect(await screen.findByText("Settings")).toBeInTheDocument();
    });

    test("shows label when opened", async () => {
      renderDropdownMenu();

      const trigger = screen.getByText("Open Menu");
      fireEvent.pointerDown(trigger, { button: 0 });
      fireEvent.pointerUp(trigger, { button: 0 });
      fireEvent.click(trigger);

      expect(await screen.findByText("Actions")).toBeInTheDocument();
    });
  });

  describe("disabled items", () => {
    test("disabled item has data-disabled attribute", async () => {
      renderDropdownMenu();

      const trigger = screen.getByText("Open Menu");
      fireEvent.pointerDown(trigger, { button: 0 });
      fireEvent.pointerUp(trigger, { button: 0 });
      fireEvent.click(trigger);

      const disabledItem = await screen.findByText("Disabled Item");
      expect(disabledItem).toHaveAttribute("data-disabled");
    });
  });

  describe("compound export", () => {
    test("named exports are available", () => {
      expect(DropdownMenuRoot).toBeDefined();
      expect(DropdownMenuTrigger).toBeDefined();
      expect(DropdownMenuContent).toBeDefined();
      expect(DropdownMenuItem).toBeDefined();
      expect(DropdownMenuCheckboxItem).toBeDefined();
      expect(DropdownMenuRadioGroup).toBeDefined();
      expect(DropdownMenuRadioItem).toBeDefined();
      expect(DropdownMenuLabel).toBeDefined();
      expect(DropdownMenuSeparator).toBeDefined();
      expect(DropdownMenuShortcut).toBeDefined();
      expect(DropdownMenuSub).toBeDefined();
      expect(DropdownMenuSubTrigger).toBeDefined();
      expect(DropdownMenuSubContent).toBeDefined();
      expect(DropdownMenuGroup).toBeDefined();
    });

    test("compound export has all parts", () => {
      expect(DropdownMenu.Root).toBeDefined();
      expect(DropdownMenu.Trigger).toBeDefined();
      expect(DropdownMenu.Content).toBeDefined();
      expect(DropdownMenu.Item).toBeDefined();
      expect(DropdownMenu.CheckboxItem).toBeDefined();
      expect(DropdownMenu.RadioGroup).toBeDefined();
      expect(DropdownMenu.RadioItem).toBeDefined();
      expect(DropdownMenu.Label).toBeDefined();
      expect(DropdownMenu.Separator).toBeDefined();
      expect(DropdownMenu.Shortcut).toBeDefined();
      expect(DropdownMenu.Sub).toBeDefined();
      expect(DropdownMenu.SubTrigger).toBeDefined();
      expect(DropdownMenu.SubContent).toBeDefined();
      expect(DropdownMenu.Group).toBeDefined();
    });
  });

  describe("checkbox items", () => {
    test("renders checkbox item", async () => {
      render(
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.CheckboxItem checked={true}>Checked Item</DropdownMenu.CheckboxItem>
          </DropdownMenu.Content>
        </DropdownMenu.Root>,
      );

      const trigger = screen.getByText("Open");
      fireEvent.pointerDown(trigger, { button: 0 });
      fireEvent.pointerUp(trigger, { button: 0 });
      fireEvent.click(trigger);

      expect(await screen.findByText("Checked Item")).toBeInTheDocument();
    });
  });

  describe("radio items", () => {
    test("renders radio items", async () => {
      render(
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.RadioGroup value="a">
              <DropdownMenu.RadioItem value="a">Option A</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="b">Option B</DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Root>,
      );

      const trigger = screen.getByText("Open");
      fireEvent.pointerDown(trigger, { button: 0 });
      fireEvent.pointerUp(trigger, { button: 0 });
      fireEvent.click(trigger);

      expect(await screen.findByText("Option A")).toBeInTheDocument();
      expect(await screen.findByText("Option B")).toBeInTheDocument();
    });
  });

  describe("shortcut", () => {
    test("renders shortcut text", async () => {
      render(
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              Copy
              <DropdownMenu.Shortcut>⌘C</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>,
      );

      const trigger = screen.getByText("Open");
      fireEvent.pointerDown(trigger, { button: 0 });
      fireEvent.pointerUp(trigger, { button: 0 });
      fireEvent.click(trigger);

      expect(await screen.findByText("⌘C")).toBeInTheDocument();
    });
  });
});
