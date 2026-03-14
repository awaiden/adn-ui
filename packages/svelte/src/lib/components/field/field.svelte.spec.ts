import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import FieldTest from "./field-test.svelte";

describe("Field", () => {
	it("should render correctly", async () => {
		render(FieldTest, {
			props: {
				label: "Username",
				description: "Enter your public display name.",
				error: "Username is required.",
			},
		});

		await expect
			.element(page.getByText("Username", { exact: true }))
			.toBeInTheDocument();
		await expect
			.element(page.getByText("Enter your public display name."))
			.toBeInTheDocument();
		await expect
			.element(page.getByText("Username is required."))
			.toBeInTheDocument();
	});

	it("should link label to input via for/id", async () => {
		render(FieldTest, {
			props: { id: "test-field", label: "Email" },
		});

		const label = page.getByText("Email");
		await expect.element(label).toHaveAttribute("for", "test-field");
	});

	it("should apply orientation classes", async () => {
		render(FieldTest, {
			props: { orientation: "horizontal", label: "Horizontal" },
		});

		const field = page.getByTestId("field");
		await expect.element(field).toHaveClass("field--horizontal");
	});
});
