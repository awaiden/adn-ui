import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
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
				<div style={{ width: 200, height: 100, border: "1px dashed gray" }}>
					Right-click here
				</div>
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
		test("renders trigger area", async () => {
			const { getByText } = await renderContextMenu();

			await expect.element(getByText("Right-click here")).toBeInTheDocument();
		});

		test("applies data-slot to trigger", async () => {
			const { container } = await renderContextMenu();

			const trigger = container.querySelector(
				'[data-slot="context-menu-trigger"]',
			);
			await expect.element(trigger as HTMLElement).toBeInTheDocument();
		});
	});

	describe("open/close behavior", () => {
		test("opens context menu on right-click", async () => {
			const { getByText } = await renderContextMenu();

			const trigger = getByText("Right-click here");
			await trigger.click({ button: "right" });

			const content = document.querySelector(
				'[data-slot="context-menu-content"]',
			);
			await expect.element(content as HTMLElement).toBeInTheDocument();
		});

		test("shows items when opened", async () => {
			const { getByText } = await renderContextMenu();

			await getByText("Right-click here").click({ button: "right" });

			await expect.element(getByText("Back")).toBeInTheDocument();
			await expect.element(getByText("Forward")).toBeInTheDocument();
		});

		test("shows label when opened", async () => {
			const { getByText } = await renderContextMenu();

			await getByText("Right-click here").click({ button: "right" });

			await expect.element(getByText("Actions")).toBeInTheDocument();
		});
	});

	describe("disabled items", () => {
		test("disabled item has data-disabled attribute", async () => {
			const { getByText } = await renderContextMenu();

			await getByText("Right-click here").click({ button: "right" });

			const disabledItem = document.querySelector(
				'[data-slot="context-menu-item"][data-disabled]',
			);
			await expect.element(disabledItem as HTMLElement).toBeInTheDocument();
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
