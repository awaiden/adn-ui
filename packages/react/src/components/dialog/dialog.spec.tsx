import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Dialog } from "./index";

describe("Dialog", () => {
	test("renders trigger and opens dialog on click", async () => {
		const { getByText } = await render(
			<Dialog.Root>
				<Dialog.Trigger>Open</Dialog.Trigger>
				<Dialog.Content>
					<Dialog.Title>Dialog Title</Dialog.Title>
					<Dialog.Description>Dialog Description</Dialog.Description>
					<div data-testid="content">Content</div>
				</Dialog.Content>
			</Dialog.Root>,
		);

		const trigger = getByText("Open");
		await expect.element(trigger).toBeInTheDocument();

		await trigger.click();

		await expect.element(getByText("Dialog Title")).toBeInTheDocument();
		await expect.element(getByText("Dialog Description")).toBeInTheDocument();
	});

	test("applies base CSS classes", async () => {
		const { getByText } = await render(
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
		await expect.element(content as HTMLElement).toBeInTheDocument();
		await expect.element(content as HTMLElement).toHaveClass("dialog__content");

		const title = getByText("Title");
		await expect.element(title).toHaveClass("dialog__title");

		const description = getByText("Description");
		await expect.element(description).toHaveClass("dialog__description");
	});

	test("closes dialog when close button is clicked", async () => {
		const { getByText } = await render(
			<Dialog.Root defaultOpen>
				<Dialog.Content>
					<Dialog.Title>Title</Dialog.Title>
				</Dialog.Content>
			</Dialog.Root>,
		);

		await expect.element(getByText("Title")).toBeInTheDocument();

		const closeButton = document.body.querySelector(
			'[data-slot="dialog-close"]',
		);
		await (closeButton as HTMLElement).click();

		await expect.element(getByText("Title")).not.toBeInTheDocument();
	});
});
