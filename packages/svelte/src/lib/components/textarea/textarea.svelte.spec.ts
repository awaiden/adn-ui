import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import TextareaTest from "./textarea-test.svelte";

describe("Textarea", () => {
	it("should render correctly", async () => {
		render(TextareaTest);
		const textarea = page.getByTestId("textarea");
		await expect.element(textarea).toBeInTheDocument();
		await expect.element(textarea).toHaveClass("textarea");
	});

	it("should handle value binding", async () => {
		render(TextareaTest);
		const textarea = page.getByTestId("textarea");
		await textarea.fill("Hello Textarea");
		await expect.element(textarea).toHaveValue("Hello Textarea");
	});

	it("should apply size variants", async () => {
		render(TextareaTest, { props: { size: "lg" } });
		const textarea = page.getByTestId("textarea");
		await expect.element(textarea).toHaveClass("textarea--lg");
	});
});
