import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import CheckboxTest from "./checkbox-test.svelte";

describe("Checkbox", () => {
	it("should render correctly", async () => {
		render(CheckboxTest);
		const root = page.getByTestId("checkbox");
		await expect.element(root).toBeInTheDocument();
		await expect.element(root).toHaveClass("checkbox");
	});

	it("should show indicator when checked", async () => {
		render(CheckboxTest, { props: { checked: true } });
		const root = page.getByTestId("checkbox");
		await expect.element(root).toHaveAttribute("aria-checked", "true");
	});

	it("should toggle state on click", async () => {
		render(CheckboxTest);
		const root = page.getByTestId("checkbox");
		await expect.element(root).toHaveAttribute("aria-checked", "false");
		await root.click();
		await expect.element(root).toHaveAttribute("aria-checked", "true");
	});

	it("should apply size variants", async () => {
		render(CheckboxTest, { props: { size: "lg" } });
		const root = page.getByTestId("checkbox");
		await expect.element(root).toHaveClass("checkbox--lg");
	});
});
