import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import Button from "./button";

describe("Button", () => {
	test("renders with default props", async () => {
		const { getByRole } = await render(<Button>Click me</Button>);
		const button = getByRole("button");

		await expect.element(button).toBeInTheDocument();
		await expect.element(button).toHaveTextContent("Click me");
		await expect.element(button).toHaveAttribute("type", "button");
	});

	test("applies default variant and size classes", async () => {
		const { getByRole } = await render(<Button>Default</Button>);
		const button = getByRole("button");

		await expect.element(button).toHaveClass("button");
		await expect.element(button).toHaveClass("button--primary");
		await expect.element(button).toHaveClass("button--md");
	});

	// Variant tests
	describe("variants", () => {
		test("applies primary variant", async () => {
			const { getByRole } = await render(
				<Button variant="primary">Primary</Button>,
			);
			await expect.element(getByRole("button")).toHaveClass("button--primary");
		});

		test("applies secondary variant", async () => {
			const { getByRole } = await render(
				<Button variant="secondary">Secondary</Button>,
			);
			await expect
				.element(getByRole("button"))
				.toHaveClass("button--secondary");
		});

		test("applies destructive variant", async () => {
			const { getByRole } = await render(
				<Button variant="destructive">Destructive</Button>,
			);
			await expect
				.element(getByRole("button"))
				.toHaveClass("button--destructive");
		});

		test("applies outline variant", async () => {
			const { getByRole } = await render(
				<Button variant="outline">Outline</Button>,
			);
			await expect.element(getByRole("button")).toHaveClass("button--outline");
		});

		test("applies ghost variant", async () => {
			const { getByRole } = await render(
				<Button variant="ghost">Ghost</Button>,
			);
			await expect.element(getByRole("button")).toHaveClass("button--ghost");
		});
	});

	// Size tests
	describe("sizes", () => {
		test("applies sm size", async () => {
			const { getByRole } = await render(<Button size="sm">Small</Button>);
			await expect.element(getByRole("button")).toHaveClass("button--sm");
		});

		test("applies md size", async () => {
			const { getByRole } = await render(<Button size="md">Medium</Button>);
			await expect.element(getByRole("button")).toHaveClass("button--md");
		});

		test("applies lg size", async () => {
			const { getByRole } = await render(<Button size="lg">Large</Button>);
			await expect.element(getByRole("button")).toHaveClass("button--lg");
		});

		test("applies icon size", async () => {
			const { getByRole } = await render(<Button size="icon">🔍</Button>);
			await expect.element(getByRole("button")).toHaveClass("button--icon");
		});
	});

	// Interaction tests
	describe("interactions", () => {
		test("calls onClick when clicked", async () => {
			const handleClick = vi.fn();
			const { getByRole } = await render(
				<Button onClick={handleClick}>Click me</Button>,
			);

			await getByRole("button").click();
			expect(handleClick).toHaveBeenCalledOnce();
		});

		test("does not call onClick when disabled", async () => {
			const handleClick = vi.fn();
			const { getByRole } = await render(
				<Button disabled onClick={handleClick}>
					Disabled
				</Button>,
			);

			const button = getByRole("button");
			await expect.element(button).toBeDisabled();
			// Playwright refuses to click disabled elements, confirming
			// the browser natively prevents interaction
			expect(handleClick).not.toHaveBeenCalled();
		});

		test("is disabled when disabled prop is set", async () => {
			const { getByRole } = await render(<Button disabled>Disabled</Button>);
			await expect.element(getByRole("button")).toBeDisabled();
		});
	});

	// Props forwarding
	describe("props forwarding", () => {
		test("applies custom className alongside variant classes", async () => {
			const { getByRole } = await render(
				<Button className="custom-class">Custom</Button>,
			);
			const button = getByRole("button");

			await expect.element(button).toHaveClass("custom-class");
			await expect.element(button).toHaveClass("button");
		});

		test("forwards aria attributes", async () => {
			const { getByRole } = await render(
				<Button aria-label="Close dialog">✕</Button>,
			);
			await expect
				.element(getByRole("button"))
				.toHaveAttribute("aria-label", "Close dialog");
		});

		test("forwards data attributes", async () => {
			const { getByRole } = await render(
				<Button data-testid="submit-btn">Submit</Button>,
			);
			await expect
				.element(getByRole("button"))
				.toHaveAttribute("data-testid", "submit-btn");
		});

		test("forwards id attribute", async () => {
			const { getByRole } = await render(<Button id="my-btn">ID</Button>);
			await expect.element(getByRole("button")).toHaveAttribute("id", "my-btn");
		});
	});

	// Children rendering
	describe("children", () => {
		test("renders string children", async () => {
			const { getByRole } = await render(<Button>Text</Button>);
			await expect.element(getByRole("button")).toHaveTextContent("Text");
		});

		test("renders element children", async () => {
			const { getByRole } = await render(
				<Button>
					<span>Icon</span> Label
				</Button>,
			);
			await expect.element(getByRole("button")).toHaveTextContent("Icon Label");
		});
	});
});
