import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import Input from "./input";

describe("Input", () => {
	test("renders with default props", async () => {
		const { getByRole } = await render(<Input />);
		const input = getByRole("textbox");

		await expect.element(input).toBeInTheDocument();
		await expect.element(input).toHaveClass("input");
		await expect.element(input).toHaveClass("input--md");
	});

	test("applies data-slot attribute", async () => {
		const { container } = await render(<Input />);

		const input = container.querySelector('[data-slot="input"]');
		await expect.element(input as HTMLElement).toBeInTheDocument();
	});

	describe("sizes", () => {
		test("applies sm size", async () => {
			const { getByRole } = await render(<Input size="sm" />);
			await expect.element(getByRole("textbox")).toHaveClass("input--sm");
		});

		test("applies md size", async () => {
			const { getByRole } = await render(<Input size="md" />);
			await expect.element(getByRole("textbox")).toHaveClass("input--md");
		});

		test("applies lg size", async () => {
			const { getByRole } = await render(<Input size="lg" />);
			await expect.element(getByRole("textbox")).toHaveClass("input--lg");
		});
	});

	describe("interactions", () => {
		test("accepts text input", async () => {
			const handleChange = vi.fn();
			const { getByRole } = await render(<Input onChange={handleChange} />);
			const input = getByRole("textbox");

			await input.fill("hello");
			await expect.element(input).toHaveValue("hello");
		});

		test("is disabled when disabled prop is set", async () => {
			const { getByRole } = await render(<Input disabled />);
			await expect.element(getByRole("textbox")).toBeDisabled();
		});

		test("shows placeholder text", async () => {
			const { getByRole } = await render(<Input placeholder="Enter text..." />);
			await expect
				.element(getByRole("textbox"))
				.toHaveAttribute("placeholder", "Enter text...");
		});
	});

	describe("props forwarding", () => {
		test("applies custom className alongside variant classes", async () => {
			const { getByRole } = await render(<Input className="custom-class" />);
			const input = getByRole("textbox");

			await expect.element(input).toHaveClass("custom-class");
			await expect.element(input).toHaveClass("input");
		});

		test("forwards type attribute", async () => {
			const { container } = await render(<Input type="email" />);
			const input = container.querySelector('[data-slot="input"]');
			await expect
				.element(input as HTMLElement)
				.toHaveAttribute("type", "email");
		});

		test("forwards aria attributes", async () => {
			const { getByRole } = await render(<Input aria-label="Email address" />);
			await expect
				.element(getByRole("textbox"))
				.toHaveAttribute("aria-label", "Email address");
		});

		test("forwards id attribute", async () => {
			const { getByRole } = await render(<Input id="my-input" />);
			await expect
				.element(getByRole("textbox"))
				.toHaveAttribute("id", "my-input");
		});

		test("forwards name attribute", async () => {
			const { getByRole } = await render(<Input name="email" />);
			await expect
				.element(getByRole("textbox"))
				.toHaveAttribute("name", "email");
		});

		test("forwards readOnly attribute", async () => {
			const { getByRole } = await render(<Input readOnly value="read only" />);
			const input = getByRole("textbox");
			await expect.element(input).toHaveAttribute("readonly", "");
			await expect.element(input).toHaveValue("read only");
		});
	});

	describe("aria-invalid", () => {
		test("supports aria-invalid for error state", async () => {
			const { getByRole } = await render(<Input aria-invalid="true" />);
			await expect
				.element(getByRole("textbox"))
				.toHaveAttribute("aria-invalid", "true");
		});
	});
});
