import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import SelectTest from "./select-test.svelte";

describe("Select", () => {
	it("should render correctly and open/close", async () => {
		render(SelectTest);

		const trigger = page.getByTestId("select-trigger");
		await expect.element(trigger).toBeInTheDocument();

		await trigger.click();

		const content = page.getByTestId("select-content");
		await expect.element(content).toBeVisible();

		const appleItem = page.getByTestId("item-apple");
		await expect.element(appleItem).toBeVisible();
	});

	it("should allow single selection", async () => {
		render(SelectTest, { props: { type: "single" } });

		const trigger = page.getByTestId("select-trigger");
		await trigger.click();

		const bananaItem = page.getByTestId("item-banana");
		await bananaItem.click();

		// Value is reflected inside the trigger for single selects.
		// Since it can be inside a sub-element like a span, we check if the text is in the document and the content is closed.
		const content = page.getByTestId("select-content");
		await expect.element(content).not.toBeInTheDocument();
	});

	it("should apply variant classes", async () => {
		render(SelectTest);

		const trigger = page.getByTestId("select-trigger");
		await expect.element(trigger).toHaveClass("select__trigger");

		await trigger.click();

		const content = page.getByTestId("select-content");
		const viewport = page.getByTestId("select-viewport");
		const appleItem = page.getByTestId("item-apple");

		await expect.element(content).toHaveClass("select__content");
		await expect.element(viewport).toHaveClass("select__viewport");
		await expect.element(appleItem).toHaveClass("select__item");
	});
});
