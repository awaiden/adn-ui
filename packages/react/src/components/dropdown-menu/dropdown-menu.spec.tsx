import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
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
		test("renders trigger", async () => {
			const { getByText } = await renderDropdownMenu();

			await expect.element(getByText("Open Menu")).toBeInTheDocument();
		});

		test("applies data-slot to trigger", async () => {
			const { container } = await renderDropdownMenu();

			const trigger = container.querySelector(
				'[data-slot="dropdown-menu-trigger"]',
			);
			await expect.element(trigger as HTMLElement).toBeInTheDocument();
		});
	});

	describe("open/close behavior", () => {
		test("opens dropdown on trigger click", async () => {
			const { getByText } = await renderDropdownMenu();

			await getByText("Open Menu").click();

			const content = document.querySelector(
				'[data-slot="dropdown-menu-content"]',
			);
			await expect.element(content as HTMLElement).toBeInTheDocument();
		});

		test("shows items when opened", async () => {
			const { getByText } = await renderDropdownMenu();

			await getByText("Open Menu").click();

			await expect.element(getByText("Profile")).toBeInTheDocument();
			await expect.element(getByText("Settings")).toBeInTheDocument();
		});

		test("shows label when opened", async () => {
			const { getByText } = await renderDropdownMenu();

			await getByText("Open Menu").click();

			await expect.element(getByText("Actions")).toBeInTheDocument();
		});
	});

	describe("disabled items", () => {
		test("disabled item has data-disabled attribute", async () => {
			const { getByText } = await renderDropdownMenu();

			await getByText("Open Menu").click();

			const disabledItem = document.querySelector(
				'[data-slot="dropdown-menu-item"][data-disabled]',
			);
			await expect.element(disabledItem as HTMLElement).toBeInTheDocument();
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
			const { getByText } = await render(
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
					<DropdownMenu.Content>
						<DropdownMenu.CheckboxItem checked={true}>
							Checked Item
						</DropdownMenu.CheckboxItem>
					</DropdownMenu.Content>
				</DropdownMenu.Root>,
			);

			await getByText("Open").click();

			await expect.element(getByText("Checked Item")).toBeInTheDocument();
		});
	});

	describe("radio items", () => {
		test("renders radio items", async () => {
			const { getByText } = await render(
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
					<DropdownMenu.Content>
						<DropdownMenu.RadioGroup value="a">
							<DropdownMenu.RadioItem value="a">
								Option A
							</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem value="b">
								Option B
							</DropdownMenu.RadioItem>
						</DropdownMenu.RadioGroup>
					</DropdownMenu.Content>
				</DropdownMenu.Root>,
			);

			await getByText("Open").click();

			await expect.element(getByText("Option A")).toBeInTheDocument();
			await expect.element(getByText("Option B")).toBeInTheDocument();
		});
	});

	describe("shortcut", () => {
		test("renders shortcut text", async () => {
			const { getByText } = await render(
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

			await getByText("Open").click();

			await expect.element(getByText("⌘C")).toBeInTheDocument();
		});
	});
});
