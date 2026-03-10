import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Switch } from "./index";

describe("Switch", () => {
	test("renders with base class", async () => {
		const { getByRole } = await render(
			<Switch.Root data-testid="switch">
				<Switch.Thumb />
			</Switch.Root>,
		);
		const switchElement = getByRole("switch");

		await expect.element(switchElement).toBeInTheDocument();
		await expect.element(switchElement).toHaveClass("switch");
	});

	test("applies default md size class", async () => {
		const { getByRole } = await render(
			<Switch.Root>
				<Switch.Thumb />
			</Switch.Root>,
		);
		await expect.element(getByRole("switch")).toHaveClass("switch--md");
	});

	describe("checked state", () => {
		test("has checked state when checked", async () => {
			const { getByRole } = await render(
				<Switch.Root checked>
					<Switch.Thumb />
				</Switch.Root>,
			);
			const switchElement = getByRole("switch");
			await expect
				.element(switchElement)
				.toHaveAttribute("data-state", "checked");
		});

		test("has unchecked state when unchecked", async () => {
			const { getByRole } = await render(
				<Switch.Root checked={false}>
					<Switch.Thumb />
				</Switch.Root>,
			);
			const switchElement = getByRole("switch");
			await expect
				.element(switchElement)
				.toHaveAttribute("data-state", "unchecked");
		});
	});

	describe("sizes", () => {
		test("applies sm size", async () => {
			const { getByRole } = await render(
				<Switch.Root size="sm">
					<Switch.Thumb />
				</Switch.Root>,
			);
			await expect.element(getByRole("switch")).toHaveClass("switch--sm");
		});

		test("applies lg size", async () => {
			const { getByRole } = await render(
				<Switch.Root size="lg">
					<Switch.Thumb />
				</Switch.Root>,
			);
			await expect.element(getByRole("switch")).toHaveClass("switch--lg");
		});
	});

	test("handles disabled state", async () => {
		const { getByRole } = await render(
			<Switch.Root disabled>
				<Switch.Thumb />
			</Switch.Root>,
		);
		const switchElement = getByRole("switch");
		await expect.element(switchElement).toBeDisabled();
	});
});
