import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import AspectRatioTest from "./aspect-ratio-test.svelte";

describe("AspectRatio", () => {
	it("should render correctly", async () => {
		render(AspectRatioTest);

		const ar = page.getByTestId("aspect-ratio");
		await expect.element(ar).toBeInTheDocument();
		await expect.element(ar).toHaveClass("aspect-ratio");
	});

	it("should apply custom ratio", async () => {
		render(AspectRatioTest, { props: { ratio: 16 / 9 } });

		const ar = page.getByTestId("aspect-ratio");
		await expect.element(ar).toHaveAttribute("data-aspect-ratio-root", "");
	});

	it("should apply custom classes", async () => {
		render(AspectRatioTest, {
			props: { class: "custom-ar" },
		});

		const ar = page.getByTestId("aspect-ratio");
		await expect.element(ar).toHaveClass("custom-ar");
	});
});
