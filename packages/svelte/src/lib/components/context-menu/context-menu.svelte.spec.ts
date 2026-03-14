import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import ContextMenuTest from "./context-menu-test.svelte";

describe("ContextMenu", () => {
	it("should render trigger", async () => {
		render(ContextMenuTest);

		const trigger = page.getByTestId("trigger");
		await expect.element(trigger).toBeInTheDocument();
	});

	it("should open on right-click", async () => {
		render(ContextMenuTest);

		const trigger = page.getByTestId("trigger");
		await trigger.click({ button: "right" });

		const content = page.getByTestId("content");
		await expect.element(content).toBeVisible();
		await expect.element(page.getByText("Actions")).toBeInTheDocument();
		await expect.element(page.getByTestId("item")).toBeInTheDocument();
	});

	it("should apply base classes", async () => {
		render(ContextMenuTest);

		await page.getByTestId("trigger").click({ button: "right" });

		const content = page.getByTestId("content");
		const item = page.getByTestId("item");

		await expect.element(content).toHaveClass("context-menu__content");
		await expect.element(item).toHaveClass("context-menu__item");
	});
});
