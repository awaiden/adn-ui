import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import BreadcrumbTest from "./breadcrumb-test.svelte";

describe("Breadcrumb", () => {
	it("should render correctly", async () => {
		render(BreadcrumbTest);

		await expect.element(page.getByText("Home")).toBeInTheDocument();
		await expect.element(page.getByText("Docs")).toBeInTheDocument();
		await expect.element(page.getByText("Breadcrumb")).toBeInTheDocument();
		await expect
			.element(page.getByRole("navigation", { name: "breadcrumb" }))
			.toBeInTheDocument();
	});

	it("should apply base classes", async () => {
		render(BreadcrumbTest);

		const breadcrumb = page.getByTestId("breadcrumb");
		await expect.element(breadcrumb).toHaveClass("breadcrumb");
	});
});
