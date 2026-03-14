import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import CardTest from "./card-test.svelte";

describe("Card", () => {
	it("should render correctly", async () => {
		render(CardTest, {
			props: {
				title: "Custom Title",
				description: "Custom Description",
				content: "Custom Content",
			},
		});

		await expect.element(page.getByText("Custom Title")).toBeInTheDocument();
		await expect
			.element(page.getByText("Custom Description"))
			.toBeInTheDocument();
		await expect.element(page.getByText("Custom Content")).toBeInTheDocument();
	});

	it("should apply custom classes", async () => {
		render(CardTest, {
			props: {
				class: "custom-card",
			},
		});

		const card = page.getByTestId("card");
		await expect.element(card).toHaveClass("custom-card");
	});
});
