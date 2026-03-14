import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from ".";

function renderContextMenu() {
  return render(
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div style={{ border: "1px dashed gray", height: 100, width: 200 }}>Right-click here</div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Label>Actions</ContextMenu.Label>
        <ContextMenu.Separator />
        <ContextMenu.Item>Back</ContextMenu.Item>
        <ContextMenu.Item>Forward</ContextMenu.Item>
        <ContextMenu.Item disabled>Reload</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>,
  );
}

describe("ContextMenu", () => {
  describe("rendering", () => {
    test("renders trigger area", () => {
      renderContextMenu();

      expect(screen.getByText("Right-click here")).toBeInTheDocument();
    });

    test("applies data-slot to trigger", () => {
      const { container } = renderContextMenu();

      const trigger = container.querySelector('[data-slot="context-menu-trigger"]');
      expect(trigger as HTMLElement).toBeInTheDocument();
    });
  });

  describe("open/close behavior", () => {
    test("opens context menu on right-click", async () => {
      renderContextMenu();

      const trigger = screen.getByText("Right-click here");
      fireEvent.contextMenu(trigger);

      const content = await screen.findByRole("menu");
      expect(content).toBeInTheDocument();
    });

    test("shows items when opened", async () => {
      renderContextMenu();

      fireEvent.contextMenu(screen.getByText("Right-click here"));

      expect(await screen.findByText("Back")).toBeInTheDocument();
      expect(await screen.findByText("Forward")).toBeInTheDocument();
    });

    test("shows label when opened", async () => {
      renderContextMenu();

      fireEvent.contextMenu(screen.getByText("Right-click here"));

      expect(await screen.findByText("Actions")).toBeInTheDocument();
    });
  });

  describe("disabled items", () => {
    test("disabled item has data-disabled attribute", async () => {
      renderContextMenu();

      fireEvent.contextMenu(screen.getByText("Right-click here"));

      const disabledItem = await screen.findByText("Reload");
      expect(disabledItem).toHaveAttribute("data-disabled");
    });
  });

  describe("compound export", () => {
    test("named exports are available", () => {
      expect(ContextMenuRoot).toBeDefined();
      expect(ContextMenuTrigger).toBeDefined();
      expect(ContextMenuContent).toBeDefined();
      expect(ContextMenuItem).toBeDefined();
      expect(ContextMenuCheckboxItem).toBeDefined();
      expect(ContextMenuRadioGroup).toBeDefined();
      expect(ContextMenuRadioItem).toBeDefined();
      expect(ContextMenuLabel).toBeDefined();
      expect(ContextMenuSeparator).toBeDefined();
      expect(ContextMenuShortcut).toBeDefined();
      expect(ContextMenuSub).toBeDefined();
      expect(ContextMenuSubTrigger).toBeDefined();
      expect(ContextMenuSubContent).toBeDefined();
      expect(ContextMenuGroup).toBeDefined();
    });

    test("compound export has all parts", () => {
      expect(ContextMenu.Root).toBeDefined();
      expect(ContextMenu.Trigger).toBeDefined();
      expect(ContextMenu.Content).toBeDefined();
      expect(ContextMenu.Item).toBeDefined();
      expect(ContextMenu.CheckboxItem).toBeDefined();
      expect(ContextMenu.RadioGroup).toBeDefined();
      expect(ContextMenu.RadioItem).toBeDefined();
      expect(ContextMenu.Label).toBeDefined();
      expect(ContextMenu.Separator).toBeDefined();
      expect(ContextMenu.Shortcut).toBeDefined();
      expect(ContextMenu.Sub).toBeDefined();
      expect(ContextMenu.SubTrigger).toBeDefined();
      expect(ContextMenu.SubContent).toBeDefined();
      expect(ContextMenu.Group).toBeDefined();
    });
  });
});
