import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import AccordionTest from "./accordion-test.svelte";

describe("Accordion", () => {
	it("should render correctly", async () => {
		render(AccordionTest);

		await expect.element(page.getByText("Trigger 1")).toBeInTheDocument();
		await expect.element(page.getByText("Trigger 2")).toBeInTheDocument();
	});

	it("should toggle content on trigger click (single)", async () => {
		render(AccordionTest, { props: { type: "single" } });

		const trigger1 = page.getByText("Trigger 1");
		const content1 = page.getByText("Content 1");

		await expect.element(content1).not.toBeVisible();

		await trigger1.click();
		await expect.element(content1).toBeVisible();

		const trigger2 = page.getByText("Trigger 2");
		const content2 = page.getByText("Content 2");

		await trigger2.click();
		await expect.element(content1).not.toBeVisible();
		await expect.element(content2).toBeVisible();
	});

	it("should allow multiple open items (multiple)", async () => {
		render(AccordionTest, { props: { type: "multiple" } });

		const trigger1 = page.getByText("Trigger 1");
		const trigger2 = page.getByText("Trigger 2");
		const content1 = page.getByText("Content 1");
		const content2 = page.getByText("Content 2");

		await trigger1.click();
		await trigger2.click();

		await expect.element(content1).toBeVisible();
		await expect.element(content2).toBeVisible();
	});
});
