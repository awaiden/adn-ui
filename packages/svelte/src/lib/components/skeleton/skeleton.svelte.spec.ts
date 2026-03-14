import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import SkeletonTest from "./skeleton-test.svelte";

describe("Skeleton", () => {
	it("should render correctly", async () => {
		render(SkeletonTest);

		const skeleton = page.getByTestId("skeleton");
		await expect.element(skeleton).toBeInTheDocument();
		await expect.element(skeleton).toHaveClass("skeleton");
		await expect.element(skeleton).toHaveClass("skeleton--default");
	});

	it("should apply variant classes", async () => {
		render(SkeletonTest, {
			props: { variant: "circular" },
		});

		const skeleton = page.getByTestId("skeleton");
		await expect.element(skeleton).toHaveClass("skeleton--circular");
	});

	it("should apply custom classes", async () => {
		render(SkeletonTest, {
			props: { class: "h-10 w-10" },
		});

		const skeleton = page.getByTestId("skeleton");
		await expect.element(skeleton).toHaveClass("h-10");
		await expect.element(skeleton).toHaveClass("w-10");
	});
});
