import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Tabs } from "./index";

describe("Tabs", () => {
	test("renders tabs and switches content", async () => {
		const { getByRole, getByText } = await render(
			<Tabs.Root defaultValue="tab1">
				<Tabs.List>
					<Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
					<Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="tab1">Content 1</Tabs.Content>
				<Tabs.Content value="tab2">Content 2</Tabs.Content>
			</Tabs.Root>,
		);

		await expect.element(getByText("Content 1")).toBeInTheDocument();

		const tab2 = getByRole("tab", { name: "Tab 2" });
		await tab2.click();

		await expect.element(getByText("Content 2")).toBeInTheDocument();
	});

	test("applies variant classes", async () => {
		const { getByRole } = await render(
			<Tabs.Root defaultValue="tab1" variant="outline">
				<Tabs.List>
					<Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="tab1">Content 1</Tabs.Content>
			</Tabs.Root>,
		);

		const list = getByRole("tablist");
		const trigger = getByRole("tab");

		await expect.element(list).toHaveClass("tabs__list--outline");
		await expect.element(trigger).toHaveClass("tabs__trigger--outline");
	});
});
