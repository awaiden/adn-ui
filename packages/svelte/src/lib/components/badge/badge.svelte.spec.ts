import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import BadgeTest from "./badge-test.svelte";

describe("Badge", () => {
	it("should render correctly", async () => {
		render(BadgeTest, { props: { children: "New" } });

		const badge = page.getByText("New");
		await expect.element(badge).toBeInTheDocument();
		await expect.element(badge).toHaveClass("badge");
		await expect.element(badge).toHaveClass("badge--primary");
	});

	it("should apply variant classes", async () => {
		render(BadgeTest, {
			props: { variant: "destructive", children: "Error" },
		});

		const badge = page.getByText("Error");
		await expect.element(badge).toHaveClass("badge--destructive");
	});

	it("should apply custom classes", async () => {
		render(BadgeTest, {
			props: { class: "custom-badge", children: "Custom" },
		});

		const badge = page.getByTestId("badge");
		await expect.element(badge).toHaveClass("custom-badge");
	});
});
