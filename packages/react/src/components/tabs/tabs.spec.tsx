import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Tabs } from "./index";

describe("Tabs", () => {
	test("renders tabs and switches content", async () => {
		render(
			<Tabs.Root defaultValue="tab1">
				<Tabs.List>
					<Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
					<Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="tab1">Content 1</Tabs.Content>
				<Tabs.Content value="tab2">Content 2</Tabs.Content>
			</Tabs.Root>,
		);

		expect(screen.getByText("Content 1")).toBeInTheDocument();

		const tab2 = screen.getByRole("tab", { name: "Tab 2" });
		fireEvent.mouseDown(tab2);
		fireEvent.mouseUp(tab2);
		fireEvent.click(tab2);

		await waitFor(() => {
			expect(screen.getByText("Content 2")).toBeInTheDocument();
		});
	});

	test("applies variant classes", () => {
		render(
			<Tabs.Root defaultValue="tab1" variant="outline">
				<Tabs.List>
					<Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="tab1">Content 1</Tabs.Content>
			</Tabs.Root>,
		);

		const list = screen.getByRole("tablist");
		const trigger = screen.getByRole("tab");

		expect(list).toHaveClass("tabs__list--outline");
		expect(trigger).toHaveClass("tabs__trigger--outline");
	});
});
