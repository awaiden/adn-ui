import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Surface } from ".";

describe("Surface", () => {
	test("renders with base class", () => {
		render(<Surface>Content</Surface>);
		const surface = screen.getByText("Content");

		expect(surface).toBeInTheDocument();
		expect(surface).toHaveClass("surface");
	});

	test("applies custom className alongside base class", () => {
		render(<Surface className="custom">Content</Surface>);
		const surface = screen.getByText("Content");

		expect(surface).toHaveClass("surface");
		expect(surface).toHaveClass("custom");
	});

	test("forwards props", () => {
		render(
			<Surface data-testid="my-surface" id="surface-1">
				Content
			</Surface>,
		);
		const surface = screen.getByText("Content");

		expect(surface).toHaveAttribute("data-testid", "my-surface");
		expect(surface).toHaveAttribute("id", "surface-1");
	});

	test("forwards aria attributes", () => {
		render(<Surface aria-label="Main surface">Content</Surface>);

		expect(screen.getByText("Content")).toHaveAttribute(
			"aria-label",
			"Main surface",
		);
	});

	test("renders string children", () => {
		render(<Surface>Hello</Surface>);
		expect(screen.getByText("Hello")).toHaveTextContent("Hello");
	});

	test("renders element children", () => {
		render(
			<Surface>
				<span>Nested</span>
			</Surface>,
		);

		expect(screen.getByText("Nested")).toBeInTheDocument();
	});

	test("renders as a div element", () => {
		const { container } = render(<Surface>Content</Surface>);
		const div = container.querySelector("div");
		expect(div).toBeInTheDocument();
	});
});
