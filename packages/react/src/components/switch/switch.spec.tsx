import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Switch } from "./index";

describe("Switch", () => {
	test("renders with base class", () => {
		render(
			<Switch.Root data-testid="switch">
				<Switch.Thumb />
			</Switch.Root>,
		);
		const switchElement = screen.getByRole("switch");

		expect(switchElement).toBeInTheDocument();
		expect(switchElement).toHaveClass("switch");
	});

	test("applies default md size class", () => {
		render(
			<Switch.Root>
				<Switch.Thumb />
			</Switch.Root>,
		);
		expect(screen.getByRole("switch")).toHaveClass("switch--md");
	});

	describe("checked state", () => {
		test("has checked state when checked", () => {
			render(
				<Switch.Root checked>
					<Switch.Thumb />
				</Switch.Root>,
			);
			const switchElement = screen.getByRole("switch");
			expect(switchElement).toHaveAttribute("data-state", "checked");
		});

		test("has unchecked state when unchecked", () => {
			render(
				<Switch.Root checked={false}>
					<Switch.Thumb />
				</Switch.Root>,
			);
			const switchElement = screen.getByRole("switch");
			expect(switchElement).toHaveAttribute("data-state", "unchecked");
		});
	});

	describe("sizes", () => {
		test("applies sm size", () => {
			render(
				<Switch.Root size="sm">
					<Switch.Thumb />
				</Switch.Root>,
			);
			expect(screen.getByRole("switch")).toHaveClass("switch--sm");
		});

		test("applies lg size", () => {
			render(
				<Switch.Root size="lg">
					<Switch.Thumb />
				</Switch.Root>,
			);
			expect(screen.getByRole("switch")).toHaveClass("switch--lg");
		});
	});

	test("handles disabled state", () => {
		render(
			<Switch.Root disabled>
				<Switch.Thumb />
			</Switch.Root>,
		);
		const switchElement = screen.getByRole("switch");
		expect(switchElement).toBeDisabled();
	});
});
