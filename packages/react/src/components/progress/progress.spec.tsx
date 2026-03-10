import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
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
	test("renders with base class", async () => {
		const { container } = await renderProgress();
		const root = container.querySelector('[data-slot="progress"]');

		expect(root).not.toBeNull();
		expect(root?.classList.contains("progress")).toBe(true);
	});

	test("renders all data-slot attributes", async () => {
		const { container } = await renderProgress();

		expect(container.querySelector('[data-slot="progress"]')).not.toBeNull();
		expect(
			container.querySelector('[data-slot="progress-indicator"]'),
		).not.toBeNull();
	});

	test("applies default md size class", async () => {
		const { container } = await renderProgress();
		const root = container.querySelector('[data-slot="progress"]');

		expect(root?.classList.contains("progress--md")).toBe(true);
	});

	describe("sizes", () => {
		test("applies sm size", async () => {
			const { container } = await renderProgress({ size: "sm", value: 50 });
			const root = container.querySelector('[data-slot="progress"]');

			expect(root?.classList.contains("progress--sm")).toBe(true);
		});

		test("applies md size", async () => {
			const { container } = await renderProgress({ size: "md", value: 50 });
			const root = container.querySelector('[data-slot="progress"]');

			expect(root?.classList.contains("progress--md")).toBe(true);
		});

		test("applies lg size", async () => {
			const { container } = await renderProgress({ size: "lg", value: 50 });
			const root = container.querySelector('[data-slot="progress"]');

			expect(root?.classList.contains("progress--lg")).toBe(true);
		});
	});

	test("renders progressbar role", async () => {
		const { getByRole } = await renderProgress();
		await expect.element(getByRole("progressbar")).toBeInTheDocument();
	});

	test("has correct aria-valuenow", async () => {
		const { getByRole } = await renderProgress({ value: 75 });
		await expect
			.element(getByRole("progressbar"))
			.toHaveAttribute("aria-valuenow", "75");
	});

	test("has correct aria-valuemax", async () => {
		const { getByRole } = await renderProgress({ value: 50, max: 200 });
		await expect
			.element(getByRole("progressbar"))
			.toHaveAttribute("aria-valuemax", "200");
	});

	test("applies data-state complete when value equals max", async () => {
		const { container } = await renderProgress({ value: 100 });
		const root = container.querySelector('[data-slot="progress"]');

		expect(root?.getAttribute("data-state")).toBe("complete");
	});

	test("applies data-state loading when value is less than max", async () => {
		const { container } = await renderProgress({ value: 50 });
		const root = container.querySelector('[data-slot="progress"]');

		expect(root?.getAttribute("data-state")).toBe("loading");
	});

	test("applies data-state indeterminate when value is null", async () => {
		const { container } = await render(
			<Progress.Root value={null}>
				<Progress.Indicator />
			</Progress.Root>,
		);
		const root = container.querySelector('[data-slot="progress"]');

		expect(root?.getAttribute("data-state")).toBe("indeterminate");
	});

	test("forwards custom className to root", async () => {
		const { container } = await renderProgress({
			className: "custom-progress",
		});
		const root = container.querySelector('[data-slot="progress"]');

		expect(root?.classList.contains("progress")).toBe(true);
		expect(root?.classList.contains("custom-progress")).toBe(true);
	});

	test("indicator renders inside root", async () => {
		const { container } = await renderProgress();
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
