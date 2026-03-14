import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import ProgressTest from "./progress-test.svelte";

describe("Progress", () => {
	it("should render correctly", async () => {
		render(ProgressTest, { props: { value: 50, max: 100 } });

		const progress = page.getByTestId("progress");
		await expect.element(progress).toBeInTheDocument();
		await expect.element(progress).toHaveAttribute("aria-valuenow", "50");
		await expect.element(progress).toHaveAttribute("aria-valuemax", "100");
	});

	it("should apply size classes", async () => {
		render(ProgressTest, { props: { size: "lg" } });

		const progress = page.getByTestId("progress");
		await expect.element(progress).toHaveClass("progress--lg");
	});

	it("should apply custom classes", async () => {
		render(ProgressTest, {
			props: { class: "custom-progress" },
		});

		const progress = page.getByTestId("progress");
		await expect.element(progress).toHaveClass("custom-progress");
	});
});
