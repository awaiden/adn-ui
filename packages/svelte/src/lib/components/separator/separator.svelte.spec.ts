import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import SeparatorTest from "./separator-test.svelte";

describe("Separator", () => {
	it("should render correctly", async () => {
		render(SeparatorTest);
		const separator = page.getByTestId("separator");
		await expect.element(separator).toBeInTheDocument();
		await expect.element(separator).toHaveClass("separator");
		await expect.element(separator).toHaveClass("separator--horizontal");
	});

	it("should support vertical orientation", async () => {
		render(SeparatorTest, { props: { orientation: "vertical" } });
		const separator = page.getByTestId("separator");
		await expect.element(separator).toHaveClass("separator--vertical");
	});
});
