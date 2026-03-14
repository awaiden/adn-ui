import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import DialogTest from "./dialog-test.svelte";

describe("Dialog", () => {
	it("should render correctly", async () => {
		render(DialogTest);

		const trigger = page.getByTestId("trigger");
		await expect.element(trigger).toBeInTheDocument();
	});

	it("should open on trigger click", async () => {
		render(DialogTest);

		const trigger = page.getByTestId("trigger");
		await trigger.click();

		const content = page.getByTestId("content");
		await expect.element(content).toBeVisible();
		await expect.element(page.getByText("Title")).toBeInTheDocument();
		await expect.element(page.getByText("Description")).toBeInTheDocument();
	});

	it("should close on close click", async () => {
		render(DialogTest);

		await page.getByTestId("trigger").click();
		const content = page.getByTestId("content");
		await expect.element(content).toBeVisible();

		await page.getByTestId("close").click();
		await expect.element(content).not.toBeInTheDocument();
	});

	it("should apply base classes", async () => {
		render(DialogTest, { props: { open: true } });

		const overlay = page.getByTestId("overlay");
		const content = page.getByTestId("content");

		await expect.element(overlay).toHaveClass("dialog__overlay");
		await expect.element(content).toHaveClass("dialog__content");
	});
});
