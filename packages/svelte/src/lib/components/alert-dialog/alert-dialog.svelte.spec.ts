import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import AlertDialogTest from "./alert-dialog-test.svelte";

describe("AlertDialog", () => {
	it("should render correctly", async () => {
		render(AlertDialogTest);

		const trigger = page.getByTestId("trigger");
		await expect.element(trigger).toBeInTheDocument();
	});

	it("should open on trigger click", async () => {
		render(AlertDialogTest);

		const trigger = page.getByTestId("trigger");
		await trigger.click();

		const content = page.getByTestId("content");
		await expect.element(content).toBeVisible();
		await expect.element(page.getByText("Title")).toBeInTheDocument();
		await expect.element(page.getByText("Description")).toBeInTheDocument();
	});

	it("should close on cancel click", async () => {
		render(AlertDialogTest);

		await page.getByTestId("trigger").click();
		const content = page.getByTestId("content");
		await expect.element(content).toBeVisible();

		await page.getByTestId("cancel").click();
		await expect.element(content).not.toBeInTheDocument();
	});

	it("should apply base classes", async () => {
		render(AlertDialogTest, { props: { open: true } });

		const overlay = page.getByTestId("overlay");
		const content = page.getByTestId("content");

		await expect.element(overlay).toHaveClass("alert-dialog__overlay");
		await expect.element(content).toHaveClass("alert-dialog__content");
	});
});
