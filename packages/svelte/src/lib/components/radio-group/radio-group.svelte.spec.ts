import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import RadioGroupTest from "./radio-group-test.svelte";

describe("RadioGroup", () => {
	it("should render correctly", async () => {
		render(RadioGroupTest);

		const root = page.getByTestId("root");
		await expect.element(root).toBeInTheDocument();
	});

	it("should apply base classes", async () => {
		render(RadioGroupTest);

		const root = page.getByTestId("root");
		const item = page.getByTestId("item-1");

		await expect.element(root).toHaveClass("radio-group");
		await expect.element(item).toHaveClass("radio-group__item");
	});

	it("should change value on click", async () => {
		render(RadioGroupTest);

		const item2 = page.getByTestId("item-2");
		await item2.click();

		const indicator2 = page.getByTestId("indicator-2");
		await expect.element(indicator2).toBeInTheDocument();
	});
});
