import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import Textarea from "./textarea";

describe("Textarea", () => {
	test("renders with default props", async () => {
		const { getByRole } = await render(<Textarea />);
		const textarea = getByRole("textbox");

		await expect.element(textarea).toBeInTheDocument();
		await expect.element(textarea).toHaveClass("textarea");
		await expect.element(textarea).toHaveClass("textarea--md");
	});

	test("applies data-slot attribute", async () => {
		const { container } = await render(<Textarea />);

		const textarea = container.querySelector('[data-slot="textarea"]');
		await expect.element(textarea as HTMLElement).toBeInTheDocument();
	});

	describe("sizes", () => {
		test("applies sm size", async () => {
			const { getByRole } = await render(<Textarea size="sm" />);
			await expect.element(getByRole("textbox")).toHaveClass("textarea--sm");
		});

		test("applies md size", async () => {
			const { getByRole } = await render(<Textarea size="md" />);
			await expect.element(getByRole("textbox")).toHaveClass("textarea--md");
		});

		test("applies lg size", async () => {
			const { getByRole } = await render(<Textarea size="lg" />);
			await expect.element(getByRole("textbox")).toHaveClass("textarea--lg");
		});
	});

	describe("interactions", () => {
		test("accepts text input", async () => {
			const handleChange = vi.fn();
			const { getByRole } = await render(<Textarea onChange={handleChange} />);
			const textarea = getByRole("textbox");

			await textarea.fill("hello world");
			await expect.element(textarea).toHaveValue("hello world");
		});

		test("is disabled when disabled prop is set", async () => {
			const { getByRole } = await render(<Textarea disabled />);
			await expect.element(getByRole("textbox")).toBeDisabled();
		});

		test("shows placeholder text", async () => {
			const { getByRole } = await render(
				<Textarea placeholder="Enter your message..." />,
			);
			await expect
				.element(getByRole("textbox"))
				.toHaveAttribute("placeholder", "Enter your message...");
		});
	});

	describe("props forwarding", () => {
		test("applies custom className alongside variant classes", async () => {
			const { getByRole } = await render(<Textarea className="custom-class" />);
			const textarea = getByRole("textbox");

			await expect.element(textarea).toHaveClass("custom-class");
			await expect.element(textarea).toHaveClass("textarea");
		});

		test("forwards aria attributes", async () => {
			const { getByRole } = await render(
				<Textarea aria-label="Message body" />,
			);
			await expect
				.element(getByRole("textbox"))
				.toHaveAttribute("aria-label", "Message body");
		});

		test("forwards id attribute", async () => {
			const { getByRole } = await render(<Textarea id="my-textarea" />);
			await expect
				.element(getByRole("textbox"))
				.toHaveAttribute("id", "my-textarea");
		});

		test("forwards name attribute", async () => {
			const { getByRole } = await render(<Textarea name="message" />);
			await expect
				.element(getByRole("textbox"))
				.toHaveAttribute("name", "message");
		});

		test("forwards rows attribute", async () => {
			const { getByRole } = await render(<Textarea rows={6} />);
			await expect.element(getByRole("textbox")).toHaveAttribute("rows", "6");
		});

		test("forwards readOnly attribute", async () => {
			const { getByRole } = await render(
				<Textarea readOnly value="read only" />,
			);
			const textarea = getByRole("textbox");
			await expect.element(textarea).toHaveAttribute("readonly", "");
			await expect.element(textarea).toHaveValue("read only");
		});
	});

	describe("aria-invalid", () => {
		test("supports aria-invalid for error state", async () => {
			const { getByRole } = await render(<Textarea aria-invalid="true" />);
			await expect
				.element(getByRole("textbox"))
				.toHaveAttribute("aria-invalid", "true");
		});
	});
});
