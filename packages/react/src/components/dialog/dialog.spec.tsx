import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Dialog } from "./index";

describe("Dialog", () => {
	test("renders trigger and opens dialog on click", () => {
		render(
			<Dialog.Root>
				<Dialog.Trigger>Open</Dialog.Trigger>
				<Dialog.Content>
					<Dialog.Title>Dialog Title</Dialog.Title>
					<Dialog.Description>Dialog Description</Dialog.Description>
					<div data-testid="content">Content</div>
				</Dialog.Content>
			</Dialog.Root>,
		);

		const trigger = screen.getByText("Open");
		expect(trigger).toBeInTheDocument();

		fireEvent.click(trigger);

		expect(screen.getByText("Dialog Title")).toBeInTheDocument();
		expect(screen.getByText("Dialog Description")).toBeInTheDocument();
	});

	test("applies base CSS classes", () => {
		render(
			<Dialog.Root open>
				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title>Title</Dialog.Title>
						<Dialog.Description>Description</Dialog.Description>
					</Dialog.Header>
					<Dialog.Footer>Footer</Dialog.Footer>
				</Dialog.Content>
			</Dialog.Root>,
		);

		const content = document.body.querySelector('[data-slot="dialog-content"]');
		expect(content as HTMLElement).toBeInTheDocument();
		expect(content as HTMLElement).toHaveClass("dialog__content");

		const title = screen.getByText("Title");
		expect(title).toHaveClass("dialog__title");

		const description = screen.getByText("Description");
		expect(description).toHaveClass("dialog__description");
	});

	test("closes dialog when close button is clicked", async () => {
		render(
			<Dialog.Root defaultOpen>
				<Dialog.Content>
					<Dialog.Title>Title</Dialog.Title>
				</Dialog.Content>
			</Dialog.Root>,
		);

		expect(screen.getByText("Title")).toBeInTheDocument();

		const closeButton = document.body.querySelector(
			'[data-slot="dialog-close"]',
		);
		(closeButton as HTMLElement).click();

		expect(screen.queryByText("Title")).not.toBeInTheDocument();
	});
});
