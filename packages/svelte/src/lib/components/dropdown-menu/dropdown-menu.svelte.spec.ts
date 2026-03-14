import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import DropdownMenuTest from "./dropdown-menu-test.svelte";

describe("DropdownMenu", () => {
	it("should render correctly", async () => {
		render(DropdownMenuTest);

		const trigger = page.getByTestId("trigger");
		await expect.element(trigger).toBeInTheDocument();
	});

	it("should open on trigger click", async () => {
		render(DropdownMenuTest);

		const trigger = page.getByTestId("trigger");
		await trigger.click();

		const content = page.getByTestId("content");
		await expect.element(content).toBeVisible();
		await expect.element(page.getByText("Actions")).toBeInTheDocument();
		await expect.element(page.getByTestId("item")).toBeInTheDocument();
	});

	it("should apply base classes", async () => {
		render(DropdownMenuTest, { props: { open: true } });

		const content = page.getByTestId("content");
		const item = page.getByTestId("item");
		const checkboxItem = page.getByTestId("checkbox-item");
		const radioItem = page.getByTestId("radio-item");

		await expect.element(content).toHaveClass("dropdown-menu__content");
		await expect.element(item).toHaveClass("dropdown-menu__item");
		await expect
			.element(checkboxItem)
			.toHaveClass("dropdown-menu__checkbox-item");
		await expect.element(radioItem).toHaveClass("dropdown-menu__radio-item");
	});
});
