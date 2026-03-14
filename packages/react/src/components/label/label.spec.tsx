import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Label } from "./index";

describe("Label", () => {
	test("renders with base class", () => {
		render(<Label>Username</Label>);
		const label = screen.getByText("Username");

		expect(label).toBeInTheDocument();
		expect(label).toHaveClass("label");
	});

	test("applies default md size class", () => {
		render(<Label>Username</Label>);
		expect(screen.getByText("Username")).toHaveClass("label--md");
	});

	describe("sizes", () => {
		test("applies sm size", () => {
			render(<Label size="sm">Small</Label>);
			expect(screen.getByText("Small")).toHaveClass("label--sm");
		});

		test("applies md size", () => {
			render(<Label size="md">Medium</Label>);
			expect(screen.getByText("Medium")).toHaveClass("label--md");
		});

		test("applies lg size", () => {
			render(<Label size="lg">Large</Label>);
			expect(screen.getByText("Large")).toHaveClass("label--lg");
		});
	});

	describe("props forwarding", () => {
		test("associates with input via htmlFor", () => {
			render(<Label htmlFor="email">Email</Label>);
			expect(screen.getByText("Email")).toHaveAttribute("for", "email");
		});

		test("applies custom className alongside base class", () => {
			render(<Label className="custom-class">Label</Label>);
			const label = screen.getByText("Label");

			expect(label).toHaveClass("label");
			expect(label).toHaveClass("custom-class");
		});

		test("forwards aria attributes", () => {
			render(<Label aria-describedby="help-text">Field</Label>);
			expect(screen.getByText("Field")).toHaveAttribute(
				"aria-describedby",
				"help-text",
			);
		});

		test("forwards id attribute", () => {
			render(<Label id="my-label">ID</Label>);
			expect(screen.getByText("ID")).toHaveAttribute("id", "my-label");
		});

		test("forwards data attributes", () => {
			render(<Label data-testid="field-label">Data</Label>);
			expect(screen.getByText("Data")).toHaveAttribute(
				"data-testid",
				"field-label",
			);
		});
	});

	describe("children", () => {
		test("renders string children", () => {
			render(<Label>Text</Label>);
			expect(screen.getByText("Text")).toHaveTextContent("Text");
		});

		test("renders element children", () => {
			render(
				<Label>
					<span>Required</span> Field
				</Label>,
			);
			expect(screen.getByText("Required")).toBeInTheDocument();
		});
	});

	test("renders as a label element", () => {
		const { container } = render(<Label>Check</Label>);
		const label = container.querySelector("label");
		expect(label).toBeInTheDocument();
	});
});
