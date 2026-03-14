import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import ToggleTest from "./toggle-test.svelte";

describe("Toggle", () => {
	it("should render correctly", async () => {
		render(ToggleTest);
		const toggle = page.getByTestId("toggle");
		await expect.element(toggle).toBeInTheDocument();
		await expect.element(toggle).toHaveClass("toggle");
	});

	it("should toggle state on click", async () => {
		render(ToggleTest);
		const toggle = page.getByTestId("toggle");
		await expect.element(toggle).toHaveAttribute("aria-pressed", "false");
		await toggle.click();
		await expect.element(toggle).toHaveAttribute("aria-pressed", "true");
	});

	it("should apply variant classes", async () => {
		render(ToggleTest, { props: { variant: "outline", size: "lg" } });
		const toggle = page.getByTestId("toggle");
		await expect.element(toggle).toHaveClass("toggle--outline");
		await expect.element(toggle).toHaveClass("toggle--lg");
	});
});
