import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Progress, ProgressIndicator, ProgressRoot } from "./index";

function renderProgress(
	props: React.ComponentProps<typeof Progress.Root> = {},
) {
	return render(
		<Progress.Root value={50} {...props}>
			<Progress.Indicator
				style={{ transform: `translateX(-${100 - (props.value ?? 50)}%)` }}
			/>
		</Progress.Root>,
	);
}

describe("Progress", () => {
	test("renders with base class", () => {
		const { container } = renderProgress();
		const root = container.querySelector('[data-slot="progress"]');

		expect(root).not.toBeNull();
		expect(root?.classList.contains("progress")).toBe(true);
	});

	test("renders all data-slot attributes", () => {
		const { container } = renderProgress();

		expect(container.querySelector('[data-slot="progress"]')).not.toBeNull();
		expect(
			container.querySelector('[data-slot="progress-indicator"]'),
		).not.toBeNull();
	});

	test("applies default md size class", () => {
		const { container } = renderProgress();
		const root = container.querySelector('[data-slot="progress"]');

		expect(root?.classList.contains("progress--md")).toBe(true);
	});

	describe("sizes", () => {
		test("applies sm size", () => {
			const { container } = renderProgress({ size: "sm", value: 50 });
			const root = container.querySelector('[data-slot="progress"]');

			expect(root?.classList.contains("progress--sm")).toBe(true);
		});

		test("applies md size", () => {
			const { container } = renderProgress({ size: "md", value: 50 });
			const root = container.querySelector('[data-slot="progress"]');

			expect(root?.classList.contains("progress--md")).toBe(true);
		});

		test("applies lg size", () => {
			const { container } = renderProgress({ size: "lg", value: 50 });
			const root = container.querySelector('[data-slot="progress"]');

			expect(root?.classList.contains("progress--lg")).toBe(true);
		});
	});

	test("renders progressbar role", () => {
		renderProgress();
		expect(screen.getByRole("progressbar")).toBeInTheDocument();
	});

	test("has correct aria-valuenow", () => {
		renderProgress({ value: 75 });
		expect(screen.getByRole("progressbar")).toHaveAttribute(
			"aria-valuenow",
			"75",
		);
	});

	test("has correct aria-valuemax", () => {
		renderProgress({ max: 200, value: 50 });
		expect(screen.getByRole("progressbar")).toHaveAttribute(
			"aria-valuemax",
			"200",
		);
	});

	test("applies data-state complete when value equals max", () => {
		const { container } = renderProgress({ value: 100 });
		const root = container.querySelector('[data-slot="progress"]');

		expect(root?.getAttribute("data-state")).toBe("complete");
	});

	test("applies data-state loading when value is less than max", () => {
		const { container } = renderProgress({ value: 50 });
		const root = container.querySelector('[data-slot="progress"]');

		expect(root?.getAttribute("data-state")).toBe("loading");
	});

	test("applies data-state indeterminate when value is null", () => {
		const { container } = render(
			<Progress.Root value={null}>
				<Progress.Indicator />
			</Progress.Root>,
		);
		const root = container.querySelector('[data-slot="progress"]');

		expect(root?.getAttribute("data-state")).toBe("indeterminate");
	});

	test("forwards custom className to root", async () => {
		const { container } = renderProgress({
			className: "custom-progress",
		});
		const root = container.querySelector('[data-slot="progress"]');

		expect(root?.classList.contains("progress")).toBe(true);
		expect(root?.classList.contains("custom-progress")).toBe(true);
	});

	test("indicator renders inside root", () => {
		const { container } = renderProgress();
		const root = container.querySelector('[data-slot="progress"]');
		const indicator = root?.querySelector('[data-slot="progress-indicator"]');

		expect(indicator).not.toBeNull();
		expect(indicator?.classList.contains("progress__indicator")).toBe(true);
	});

	describe("named exports", () => {
		test("ProgressRoot is accessible as named export", () => {
			expect(ProgressRoot).toBeDefined();
		});

		test("ProgressIndicator is accessible as named export", () => {
			expect(ProgressIndicator).toBeDefined();
		});

		test("Progress compound export has all parts", () => {
			expect(Progress.Root).toBeDefined();
			expect(Progress.Indicator).toBeDefined();
		});
	});
});
