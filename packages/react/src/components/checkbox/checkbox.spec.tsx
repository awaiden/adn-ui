import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Checkbox, CheckboxIndicator } from "./index";

describe("Checkbox", () => {
	test("renders with base class", async () => {
		const { getByRole } = await render(
			<Checkbox.Root data-testid="checkbox">
				<CheckboxIndicator />
			</Checkbox.Root>,
		);
		const checkbox = getByRole("checkbox");

		await expect.element(checkbox).toBeInTheDocument();
		await expect.element(checkbox).toHaveClass("checkbox");
	});

	test("applies default md size class", async () => {
		const { getByRole } = await render(
			<Checkbox.Root>
				<CheckboxIndicator />
			</Checkbox.Root>,
		);
		await expect.element(getByRole("checkbox")).toHaveClass("checkbox--md");
	});

	describe("checked state", () => {
		test("renders indicator when checked", async () => {
			const { getByRole, getByTestId } = await render(
				<Checkbox.Root checked>
					<CheckboxIndicator data-testid="indicator" />
				</Checkbox.Root>,
			);
			const checkbox = getByRole("checkbox");
			await expect.element(checkbox).toHaveAttribute("data-state", "checked");
			await expect.element(getByTestId("indicator")).toBeInTheDocument();
		});

		test("does not render indicator when unchecked", async () => {
			const { getByRole, container } = await render(
				<Checkbox.Root checked={false}>
					<CheckboxIndicator data-testid="indicator" />
				</Checkbox.Root>,
			);
			const checkbox = getByRole("checkbox");
			await expect.element(checkbox).toHaveAttribute("data-state", "unchecked");
			const indicator = container.querySelector('[data-testid="indicator"]');
			expect(indicator).toBeNull();
		});
	});

	describe("sizes", () => {
		test("applies sm size", async () => {
			const { getByRole } = await render(
				<Checkbox.Root size="sm">
					<CheckboxIndicator />
				</Checkbox.Root>,
			);
			await expect.element(getByRole("checkbox")).toHaveClass("checkbox--sm");
		});

		test("applies lg size", async () => {
			const { getByRole } = await render(
				<Checkbox.Root size="lg">
					<CheckboxIndicator />
				</Checkbox.Root>,
			);
			await expect.element(getByRole("checkbox")).toHaveClass("checkbox--lg");
		});
	});

	test("handles disabled state", async () => {
		const { getByRole } = await render(
			<Checkbox.Root disabled>
				<CheckboxIndicator />
			</Checkbox.Root>,
		);
		const checkbox = getByRole("checkbox");
		await expect.element(checkbox).toBeDisabled();
	});
});
