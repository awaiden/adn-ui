import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Checkbox, CheckboxIndicator } from "./index";

describe("Checkbox", () => {
	test("renders with base class", () => {
		render(
			<Checkbox.Root data-testid="checkbox">
				<CheckboxIndicator />
			</Checkbox.Root>,
		);
		const checkbox = screen.getByRole("checkbox");

		expect(checkbox).toBeInTheDocument();
		expect(checkbox).toHaveClass("checkbox");
	});

	test("applies default md size class", () => {
		render(
			<Checkbox.Root>
				<CheckboxIndicator />
			</Checkbox.Root>,
		);
		expect(screen.getByRole("checkbox")).toHaveClass("checkbox--md");
	});

	describe("checked state", () => {
		test("renders indicator when checked", () => {
			render(
				<Checkbox.Root checked>
					<CheckboxIndicator data-testid="indicator" />
				</Checkbox.Root>,
			);
			const checkbox = screen.getByRole("checkbox");
			expect(checkbox).toHaveAttribute("data-state", "checked");
			expect(screen.getByTestId("indicator")).toBeInTheDocument();
		});

		test("does not render indicator when unchecked", () => {
			const { container } = render(
				<Checkbox.Root checked={false}>
					<CheckboxIndicator data-testid="indicator" />
				</Checkbox.Root>,
			);
			const checkbox = screen.getByRole("checkbox");
			expect(checkbox).toHaveAttribute("data-state", "unchecked");
			const indicator = container.querySelector('[data-testid="indicator"]');
			expect(indicator).toBeNull();
		});
	});

	describe("sizes", () => {
		test("applies sm size", () => {
			render(
				<Checkbox.Root size="sm">
					<CheckboxIndicator />
				</Checkbox.Root>,
			);
			expect(screen.getByRole("checkbox")).toHaveClass("checkbox--sm");
		});

		test("applies lg size", () => {
			render(
				<Checkbox.Root size="lg">
					<CheckboxIndicator />
				</Checkbox.Root>,
			);
			expect(screen.getByRole("checkbox")).toHaveClass("checkbox--lg");
		});
	});

	test("handles disabled state", () => {
		render(
			<Checkbox.Root disabled>
				<CheckboxIndicator />
			</Checkbox.Root>,
		);
		const checkbox = screen.getByRole("checkbox");
		expect(checkbox).toBeDisabled();
	});
});
