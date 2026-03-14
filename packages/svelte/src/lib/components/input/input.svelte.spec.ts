import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import InputTest from "./input-test.svelte";

describe("Input", () => {
	it("should render correctly", async () => {
		render(InputTest);
		const input = page.getByTestId("input");
		await expect.element(input).toBeInTheDocument();
		await expect.element(input).toHaveClass("input");
	});

	it("should handle value binding", async () => {
		render(InputTest);
		const input = page.getByTestId("input");
		await input.fill("Hello World");
		await expect.element(input).toHaveValue("Hello World");
	});

	it("should apply size variants", async () => {
		render(InputTest, { props: { size: "lg" } });
		const input = page.getByTestId("input");
		await expect.element(input).toHaveClass("input--lg");
	});
});
