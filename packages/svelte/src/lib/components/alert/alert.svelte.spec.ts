import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import AlertTest from "./alert-test.svelte";

describe("Alert", () => {
	it("should render correctly", async () => {
		render(AlertTest, {
			props: {
				title: "Heads up!",
				description: "You can add components to your app using the CLI.",
			},
		});

		await expect.element(page.getByText("Heads up!")).toBeInTheDocument();
		await expect
			.element(
				page.getByText("You can add components to your app using the CLI."),
			)
			.toBeInTheDocument();
		await expect.element(page.getByRole("alert")).toBeInTheDocument();
	});

	it("should apply variant classes", async () => {
		render(AlertTest, {
			props: { variant: "destructive", title: "Error" },
		});

		const alert = page.getByRole("alert");
		await expect.element(alert).toHaveClass("alert--destructive");
	});

	it("should apply custom classes", async () => {
		render(AlertTest, {
			props: { class: "custom-alert", title: "Custom" },
		});

		const alert = page.getByTestId("alert");
		await expect.element(alert).toHaveClass("custom-alert");
	});
});
