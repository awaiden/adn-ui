import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Label } from "./index";

describe("Label", () => {
	test("renders with base class", async () => {
		const { getByText } = await render(<Label>Username</Label>);
		const label = getByText("Username");

		await expect.element(label).toBeInTheDocument();
		await expect.element(label).toHaveClass("label");
	});

	test("applies default md size class", async () => {
		const { getByText } = await render(<Label>Username</Label>);
		await expect.element(getByText("Username")).toHaveClass("label--md");
	});

	describe("sizes", () => {
		test("applies sm size", async () => {
			const { getByText } = await render(<Label size="sm">Small</Label>);
			await expect.element(getByText("Small")).toHaveClass("label--sm");
		});

		test("applies md size", async () => {
			const { getByText } = await render(<Label size="md">Medium</Label>);
			await expect.element(getByText("Medium")).toHaveClass("label--md");
		});

		test("applies lg size", async () => {
			const { getByText } = await render(<Label size="lg">Large</Label>);
			await expect.element(getByText("Large")).toHaveClass("label--lg");
		});
	});

	describe("props forwarding", () => {
		test("associates with input via htmlFor", async () => {
			const { getByText } = await render(<Label htmlFor="email">Email</Label>);
			await expect.element(getByText("Email")).toHaveAttribute("for", "email");
		});

		test("applies custom className alongside base class", async () => {
			const { getByText } = await render(
				<Label className="custom-class">Label</Label>,
			);
			const label = getByText("Label");

			await expect.element(label).toHaveClass("label");
			await expect.element(label).toHaveClass("custom-class");
		});

		test("forwards aria attributes", async () => {
			const { getByText } = await render(
				<Label aria-describedby="help-text">Field</Label>,
			);
			await expect
				.element(getByText("Field"))
				.toHaveAttribute("aria-describedby", "help-text");
		});

		test("forwards id attribute", async () => {
			const { getByText } = await render(<Label id="my-label">ID</Label>);
			await expect.element(getByText("ID")).toHaveAttribute("id", "my-label");
		});

		test("forwards data attributes", async () => {
			const { getByText } = await render(
				<Label data-testid="field-label">Data</Label>,
			);
			await expect
				.element(getByText("Data"))
				.toHaveAttribute("data-testid", "field-label");
		});
	});

	describe("children", () => {
		test("renders string children", async () => {
			const { getByText } = await render(<Label>Text</Label>);
			await expect.element(getByText("Text")).toHaveTextContent("Text");
		});

		test("renders element children", async () => {
			const { getByText } = await render(
				<Label>
					<span>Required</span> Field
				</Label>,
			);
			await expect.element(getByText("Required")).toBeInTheDocument();
		});
	});

	test("renders as a label element", async () => {
		const { container } = await render(<Label>Check</Label>);
		const label = container.querySelector("label");
		await expect.element(label).toBeInTheDocument();
	});
});
