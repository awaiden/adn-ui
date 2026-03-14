import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vite-plus/test";

import Button from "./button";

describe("Button", () => {
	test("renders with default props", () => {
		render(<Button>Click me</Button>);
		const button = screen.getByRole("button", { name: /click me/i });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Click me");
		expect(button).toHaveAttribute("type", "button");
	});

	test("applies default variant and size classes", () => {
		render(<Button>Default</Button>);
		const button = screen.getByRole("button");

		expect(button).toHaveClass("button");
		expect(button).toHaveClass("button--primary");
		expect(button).toHaveClass("button--md");
	});

	// Variant tests
	describe("variants", () => {
		test("applies primary variant", () => {
			render(<Button variant="primary">Primary</Button>);
			expect(screen.getByRole("button")).toHaveClass("button--primary");
		});

		test("applies secondary variant", () => {
			render(<Button variant="secondary">Secondary</Button>);
			expect(screen.getByRole("button")).toHaveClass("button--secondary");
		});

		test("applies destructive variant", () => {
			render(<Button variant="destructive">Destructive</Button>);
			expect(screen.getByRole("button")).toHaveClass("button--destructive");
		});
	});

	// Interaction tests
	describe("interactions", () => {
		test("calls onClick when clicked", async () => {
			const handleClick = vi.fn();
			render(<Button onClick={handleClick}>Click me</Button>);

			const button = screen.getByRole("button");
			// fireEvent ile simüle ediyoruz
			fireEvent.click(button);

			expect(handleClick).toHaveBeenCalledOnce();
		});

		test("is disabled when disabled prop is set", () => {
			render(<Button disabled>Disabled</Button>);
			expect(screen.getByRole("button")).toBeDisabled();
		});
	});

	// Props forwarding
	describe("props forwarding", () => {
		test("applies custom className alongside variant classes", () => {
			render(<Button className="custom-class">Custom</Button>);
			const button = screen.getByRole("button");

			expect(button).toHaveClass("custom-class");
			expect(button).toHaveClass("button");
		});

		test("forwards id attribute", () => {
			render(<Button id="my-btn">ID</Button>);
			expect(screen.getByRole("button")).toHaveAttribute("id", "my-btn");
		});
	});
});
