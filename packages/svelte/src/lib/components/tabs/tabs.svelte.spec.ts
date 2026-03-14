import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import TabsTest from "./tabs-test.svelte";

describe("Tabs", () => {
	it("should render correctly", async () => {
		render(TabsTest);
		const root = page.getByTestId("tabs");
		const list = page.getByTestId("tabs-list");
		const trigger1 = page.getByTestId("trigger-1");
		const content1 = page.getByTestId("content-1");

		await expect.element(root).toBeInTheDocument();
		await expect.element(list).toBeInTheDocument();
		await expect.element(trigger1).toBeInTheDocument();
		await expect.element(content1).toBeVisible();

		await expect.element(root).toHaveClass("tabs");
		await expect.element(list).toHaveClass("tabs__list");
	});

	it("should switch content on trigger click", async () => {
		render(TabsTest);
		const trigger2 = page.getByTestId("trigger-2");
		const content1 = page.getByTestId("content-1");
		const content2 = page.getByTestId("content-2");

		await expect.element(content1).toBeVisible();
		await expect.element(content2).not.toBeVisible();

		await trigger2.click();

		await expect.element(content1).not.toBeVisible();
		await expect.element(content2).toBeVisible();
	});

	it("should apply variant classes", async () => {
		render(TabsTest, { props: { variant: "outline" } });
		const list = page.getByTestId("tabs-list");
		const trigger1 = page.getByTestId("trigger-1");

		await expect.element(list).toHaveClass("tabs__list--outline");
		await expect.element(trigger1).toHaveClass("tabs__trigger--outline");
	});
});
