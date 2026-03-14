import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import TableTest from "./table-test.svelte";

describe("Table", () => {
	it("should render correctly", async () => {
		const data = [
			{ invoice: "INV001", status: "Paid", amount: "$250.00" },
			{ invoice: "INV002", status: "Pending", amount: "$150.00" },
		];

		render(TableTest, { props: { data } });

		await expect
			.element(page.getByText("A list of invoices."))
			.toBeInTheDocument();
		await expect.element(page.getByText("INV001")).toBeInTheDocument();
		await expect.element(page.getByText("INV002")).toBeInTheDocument();
		await expect.element(page.getByText("$400.00")).toBeInTheDocument();
	});

	it("should apply base classes", async () => {
		render(TableTest);

		const table = page.getByTestId("table");
		await expect.element(table).toHaveClass("table");
	});
});
