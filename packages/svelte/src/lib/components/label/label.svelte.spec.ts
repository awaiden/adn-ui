import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import LabelTest from "./label-test.svelte";

describe("Label", () => {
	it("should render correctly", async () => {
		render(LabelTest, { props: { children: "Email" } });

		const label = page.getByText("Email");
		await expect.element(label).toBeInTheDocument();
		await expect.element(label).toHaveClass("label");
		await expect.element(label).toHaveClass("label--md");
	});

	it("should apply size classes", async () => {
		render(LabelTest, { props: { size: "lg", children: "Large Label" } });

		const label = page.getByText("Large Label");
		await expect.element(label).toHaveClass("label--lg");
	});

	it("should apply custom classes", async () => {
		render(LabelTest, {
			props: { class: "custom-label", children: "Custom" },
		});

		const label = page.getByTestId("label");
		await expect.element(label).toHaveClass("custom-label");
	});
});
