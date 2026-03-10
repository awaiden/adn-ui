import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { Toggle } from "./index";

describe("Toggle", () => {
	test("renders with default props", async () => {
		const { getByRole } = await render(<Toggle>Toggle</Toggle>);
		const toggle = getByRole("button");

		await expect.element(toggle).toBeInTheDocument();
		await expect.element(toggle).toHaveTextContent("Toggle");
		await expect.element(toggle).toHaveAttribute("aria-pressed", "false");
	});

	test("applies default variant and size classes", async () => {
		const { getByRole } = await render(<Toggle>Default</Toggle>);
		const toggle = getByRole("button");

		await expect.element(toggle).toHaveClass("toggle");
		await expect.element(toggle).toHaveClass("toggle--md");
	});

	describe("variants", () => {
		test("applies outline variant", async () => {
			const { getByRole } = await render(
				<Toggle variant="outline">Outline</Toggle>,
			);
			await expect.element(getByRole("button")).toHaveClass("toggle--outline");
		});
	});

	describe("sizes", () => {
		test("applies sm size", async () => {
			const { getByRole } = await render(<Toggle size="sm">Small</Toggle>);
			await expect.element(getByRole("button")).toHaveClass("toggle--sm");
		});

		test("applies lg size", async () => {
			const { getByRole } = await render(<Toggle size="lg">Large</Toggle>);
			await expect.element(getByRole("button")).toHaveClass("toggle--lg");
		});
	});

	describe("interactions", () => {
		test("toggles pressed state when clicked", async () => {
			const { getByRole } = await render(<Toggle>Toggle</Toggle>);
			const toggle = getByRole("button");

			await expect.element(toggle).toHaveAttribute("aria-pressed", "false");
			await toggle.click();
			await expect.element(toggle).toHaveAttribute("aria-pressed", "true");
			await toggle.click();
			await expect.element(toggle).toHaveAttribute("aria-pressed", "false");
		});

		test("calls onPressedChange when clicked", async () => {
			const handlePressedChange = vi.fn();
			const { getByRole } = await render(
				<Toggle onPressedChange={handlePressedChange}>Toggle</Toggle>,
			);

			await getByRole("button").click();
			expect(handlePressedChange).toHaveBeenCalledWith(true);
		});

		test("is disabled when disabled prop is set", async () => {
			const { getByRole } = await render(<Toggle disabled>Disabled</Toggle>);
			await expect.element(getByRole("button")).toBeDisabled();
		});
	});
});
