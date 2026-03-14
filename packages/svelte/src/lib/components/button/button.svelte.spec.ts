import { describe, expect, it, vi } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import ButtonTest from "./button-test.svelte";

describe("Button.svelte", () => {
	it("should render correctly", async () => {
		render(ButtonTest, { props: { children: "Click me" } });

		const button = page.getByRole("button", { name: /click me/i });
		await expect.element(button).toBeInTheDocument();
	});

	it("should apply variant classes", async () => {
		render(ButtonTest, {
			props: { variant: "destructive", children: "Delete" },
		});

		const button = page.getByRole("button", { name: /delete/i });
		await expect.element(button).toHaveClass("button--destructive");
	});

	it("should handle click events", async () => {
		const onclick = vi.fn();
		render(ButtonTest, { props: { onclick, children: "Click me" } });

		const button = page.getByRole("button", { name: /click me/i });
		await new Promise((r) => setTimeout(r, 100));
		await button.click();

		expect(onclick).toHaveBeenCalled();
	});

	it("should be disabled when disabled prop is true", async () => {
		render(ButtonTest, { props: { disabled: true, children: "Disabled" } });

		const button = page.getByRole("button", { name: /disabled/i });
		await expect.element(button).toBeDisabled();
	});
});
