import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Surface } from ".";

describe("Surface", () => {
	test("renders with base class", async () => {
		const { getByText } = await render(<Surface>Content</Surface>);
		const surface = getByText("Content");

		await expect.element(surface).toBeInTheDocument();
		await expect.element(surface).toHaveClass("surface");
	});

	test("applies custom className alongside base class", async () => {
		const { getByText } = await render(
			<Surface className="custom">Content</Surface>,
		);
		const surface = getByText("Content");

		await expect.element(surface).toHaveClass("surface");
		await expect.element(surface).toHaveClass("custom");
	});

	test("forwards props", async () => {
		const { getByText } = await render(
			<Surface data-testid="my-surface" id="surface-1">
				Content
			</Surface>,
		);
		const surface = getByText("Content");

		await expect.element(surface).toHaveAttribute("data-testid", "my-surface");
		await expect.element(surface).toHaveAttribute("id", "surface-1");
	});

	test("forwards aria attributes", async () => {
		const { getByText } = await render(
			<Surface aria-label="Main surface">Content</Surface>,
		);

		await expect
			.element(getByText("Content"))
			.toHaveAttribute("aria-label", "Main surface");
	});

	test("renders string children", async () => {
		const { getByText } = await render(<Surface>Hello</Surface>);
		await expect.element(getByText("Hello")).toHaveTextContent("Hello");
	});

	test("renders element children", async () => {
		const { getByText } = await render(
			<Surface>
				<span>Nested</span>
			</Surface>,
		);

		await expect.element(getByText("Nested")).toBeInTheDocument();
	});

	test("renders as a div element", async () => {
		const { container } = await render(<Surface>Content</Surface>);
		const div = container.querySelector("div");
		await expect.element(div).toBeInTheDocument();
	});
});
