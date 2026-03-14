import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import CollapsibleTest from "./collapsible-test.svelte";

describe("Collapsible", () => {
	it("should render correctly", async () => {
		render(CollapsibleTest);

		const trigger = page.getByTestId("trigger");
		await expect.element(trigger).toBeInTheDocument();
	});

	it("should toggle content on trigger click", async () => {
		render(CollapsibleTest);

		const trigger = page.getByTestId("trigger");
		const content = page.getByText("Content");

		await expect.element(content).not.toBeVisible();

		await trigger.click();
		await expect.element(content).toBeVisible();

		await trigger.click();
		await expect.element(content).not.toBeVisible();
	});

	it("should apply base classes", async () => {
		render(CollapsibleTest);

		const root = page.getByTestId("collapsible");
		const trigger = page.getByTestId("trigger");
		const content = page.getByTestId("content");

		await expect.element(root).toHaveClass("collapsible");
		await expect.element(trigger).toHaveClass("collapsible__trigger");
		await expect.element(content).toHaveClass("collapsible__content");
	});
});
