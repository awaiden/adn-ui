import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import SurfaceTest from "./surface-test.svelte";

describe("Surface", () => {
	it("should render correctly", async () => {
		render(SurfaceTest, { props: { children: "Content" } });

		const surface = page.getByText("Content");
		await expect.element(surface).toBeInTheDocument();
		await expect.element(surface).toHaveClass("surface");
	});

	it("should apply custom classes", async () => {
		render(SurfaceTest, {
			props: { class: "custom-surface", children: "Custom" },
		});

		const surface = page.getByTestId("surface");
		await expect.element(surface).toHaveClass("custom-surface");
	});
});
