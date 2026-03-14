import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vite-plus/test";

import { Toggle } from "./index";

describe("Toggle", () => {
	test("renders with default props", () => {
		render(<Toggle>Toggle</Toggle>);
		const toggle = screen.getByRole("button");

		expect(toggle).toBeInTheDocument();
		expect(toggle).toHaveTextContent("Toggle");
		expect(toggle).toHaveAttribute("aria-pressed", "false");
	});

	test("applies default variant and size classes", () => {
		render(<Toggle>Default</Toggle>);
		const toggle = screen.getByRole("button");

		expect(toggle).toHaveClass("toggle");
		expect(toggle).toHaveClass("toggle--md");
	});

	describe("variants", () => {
		test("applies outline variant", () => {
			render(<Toggle variant="outline">Outline</Toggle>);
			expect(screen.getByRole("button")).toHaveClass("toggle--outline");
		});
	});

	describe("sizes", () => {
		test("applies sm size", () => {
			render(<Toggle size="sm">Small</Toggle>);
			expect(screen.getByRole("button")).toHaveClass("toggle--sm");
		});

		test("applies lg size", () => {
			render(<Toggle size="lg">Large</Toggle>);
			expect(screen.getByRole("button")).toHaveClass("toggle--lg");
		});
	});

	describe("interactions", () => {
		test("toggles pressed state when clicked", () => {
			render(<Toggle>Toggle</Toggle>);
			const toggle = screen.getByRole("button");

			expect(toggle).toHaveAttribute("aria-pressed", "false");
			fireEvent.click(toggle);
			expect(toggle).toHaveAttribute("aria-pressed", "true");
			fireEvent.click(toggle);
			expect(toggle).toHaveAttribute("aria-pressed", "false");
		});

		test("calls onPressedChange when clicked", () => {
			const handlePressedChange = vi.fn();
			render(<Toggle onPressedChange={handlePressedChange}>Toggle</Toggle>);

			fireEvent.click(screen.getByRole("button"));
			expect(handlePressedChange).toHaveBeenCalledWith(true);
		});

		test("is disabled when disabled prop is set", () => {
			render(<Toggle disabled>Disabled</Toggle>);
			expect(screen.getByRole("button")).toBeDisabled();
		});
	});
});
