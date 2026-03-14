import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import PopoverTest from "./popover-test.svelte";

describe("Popover", () => {
	it("should render trigger", async () => {
		render(PopoverTest);

		const trigger = page.getByTestId("trigger");
		await expect.element(trigger).toBeInTheDocument();
	});

	it("should open on trigger click", async () => {
		render(PopoverTest);

		const trigger = page.getByTestId("trigger");
		await trigger.click();

		const content = page.getByTestId("content");
		await expect.element(content).toBeVisible();
		await expect.element(page.getByText("Popover content")).toBeInTheDocument();
	});

	it("should close on close click", async () => {
		render(PopoverTest);

		await page.getByTestId("trigger").click();
		const content = page.getByTestId("content");
		await expect.element(content).toBeVisible();

		await page.getByTestId("close").click();
		await expect.element(content).not.toBeInTheDocument();
	});

	it("should apply base classes", async () => {
		render(PopoverTest, { props: { open: true } });

		const content = page.getByTestId("content");
		const arrow = page.getByTestId("arrow");

		await expect.element(content).toHaveClass("popover__content");
		await expect.element(arrow).toHaveClass("popover__arrow");
	});
});
