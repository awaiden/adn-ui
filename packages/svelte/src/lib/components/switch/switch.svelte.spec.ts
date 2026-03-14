import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import SwitchTest from "./switch-test.svelte";

describe("Switch", () => {
	it("should render correctly", async () => {
		render(SwitchTest);
		const root = page.getByTestId("switch");
		await expect.element(root).toBeInTheDocument();
		await expect.element(root).toHaveClass("switch");
	});

	it("should toggle state on click", async () => {
		render(SwitchTest);
		const root = page.getByTestId("switch");
		await expect.element(root).toHaveAttribute("aria-checked", "false");
		await root.click();
		await expect.element(root).toHaveAttribute("aria-checked", "true");
	});

	it("should apply size variants", async () => {
		render(SwitchTest, { props: { size: "lg" } });
		const root = page.getByTestId("switch");
		await expect.element(root).toHaveClass("switch--lg");
	});
});
