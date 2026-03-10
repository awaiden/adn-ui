import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
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
	placeholder = "Select an option",
	defaultValue,
	disabled,
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
		test("renders trigger with placeholder", async () => {
			const { getByText } = await renderSelect();

			await expect.element(getByText("Select an option")).toBeInTheDocument();
		});

		test("applies data-slot to trigger", async () => {
			const { container } = await renderSelect();

			const trigger = container.querySelector('[data-slot="select-trigger"]');
			await expect.element(trigger as HTMLElement).toBeInTheDocument();
		});

		test("applies base CSS class to trigger", async () => {
			const { container } = await renderSelect();

			const trigger = container.querySelector('[data-slot="select-trigger"]');
			await expect
				.element(trigger as HTMLElement)
				.toHaveClass("select__trigger");
		});

		test("applies custom className to trigger", async () => {
			const { container } = await render(
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
			await expect
				.element(trigger as HTMLElement)
				.toHaveClass("select__trigger");
			await expect
				.element(trigger as HTMLElement)
				.toHaveClass("custom-trigger");
		});

		test("renders with defaultValue selected", async () => {
			const { getByText } = await renderSelect({
				defaultValue: "banana",
			});

			await expect.element(getByText("Banana")).toBeInTheDocument();
		});
	});

	describe("open/close behavior", () => {
		test("opens dropdown on trigger click", async () => {
			const { getByText } = await renderSelect();

			await getByText("Select an option").click();

			const content = document.querySelector('[data-slot="select-content"]');
			await expect.element(content as HTMLElement).toBeInTheDocument();
		});

		test("shows items when opened", async () => {
			const { getByText } = await renderSelect();

			await getByText("Select an option").click();

			await expect.element(getByText("Apple")).toBeInTheDocument();
			await expect.element(getByText("Banana")).toBeInTheDocument();
			await expect.element(getByText("Cherry")).toBeInTheDocument();
		});

		test("selects item on click", async () => {
			const { getByText } = await renderSelect();

			await getByText("Select an option").click();
			await getByText("Apple").click();

			await expect.element(getByText("Apple")).toBeInTheDocument();
		});
	});

	describe("disabled", () => {
		test("trigger has data-disabled when disabled", async () => {
			const { container } = await renderSelect({ disabled: true });

			const trigger = container.querySelector('[data-slot="select-trigger"]');
			await expect
				.element(trigger as HTMLElement)
				.toHaveAttribute("data-disabled", "");
		});

		test("trigger is disabled when disabled", async () => {
			const { container } = await renderSelect({ disabled: true });

			const trigger = container.querySelector('[data-slot="select-trigger"]');
			await expect.element(trigger as HTMLElement).toBeDisabled();
		});
	});

	describe("groups and labels", () => {
		test("renders groups with labels", async () => {
			const { getByText } = await render(
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

			await getByText("Pick").click();

			await expect.element(getByText("Fruits")).toBeInTheDocument();
			await expect.element(getByText("Vegetables")).toBeInTheDocument();
			await expect.element(getByText("Apple")).toBeInTheDocument();
			await expect.element(getByText("Carrot")).toBeInTheDocument();
		});
	});

	describe("disabled items", () => {
		test("disabled item has data-disabled attribute", async () => {
			const { getByText } = await render(
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

			await getByText("Pick").click();

			const disabledItem = document.querySelector(
				'[data-slot="select-item"][data-disabled]',
			);
			await expect.element(disabledItem as HTMLElement).toBeInTheDocument();
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
