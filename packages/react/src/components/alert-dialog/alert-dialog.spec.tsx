import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { AlertDialog } from ".";

describe("AlertDialog", () => {
	test("renders trigger and opens content on click", async () => {
		const { getByText } = await render(
			<AlertDialog.Root>
				<AlertDialog.Trigger>Open Dialog</AlertDialog.Trigger>
				<AlertDialog.Content>
					<AlertDialog.Title>Dialog Title</AlertDialog.Title>
					<AlertDialog.Description>Dialog Description</AlertDialog.Description>
					<AlertDialog.Action>Confirm</AlertDialog.Action>
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				</AlertDialog.Content>
			</AlertDialog.Root>,
		);

		const trigger = getByText("Open Dialog");
		await expect.element(trigger).toBeInTheDocument();

		// Content should not be in the document initially
		await expect.element(getByText("Dialog Title")).not.toBeInTheDocument();

		// Click trigger to open
		await trigger.click();

		// Content should now be in the document
		await expect.element(getByText("Dialog Title")).toBeInTheDocument();
		await expect.element(getByText("Dialog Description")).toBeInTheDocument();
	});

	test("closes when Cancel is clicked", async () => {
		const { getByText } = await render(
			<AlertDialog.Root>
				<AlertDialog.Trigger>Open</AlertDialog.Trigger>
				<AlertDialog.Content>
					<AlertDialog.Title>Title</AlertDialog.Title>
					<AlertDialog.Description>Description</AlertDialog.Description>
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				</AlertDialog.Content>
			</AlertDialog.Root>,
		);

		await getByText("Open").click();
		await expect.element(getByText("Cancel")).toBeInTheDocument();

		await getByText("Cancel").click();

		// In some environments, it might take a moment to animate out
		await expect.element(getByText("Title")).not.toBeInTheDocument();
	});

	test("applies data-slot attributes", async () => {
		const { getByText } = await render(
			<AlertDialog.Root>
				<AlertDialog.Trigger>Open</AlertDialog.Trigger>
				<AlertDialog.Content>
					<AlertDialog.Header>
						<AlertDialog.Title>Title</AlertDialog.Title>
						<AlertDialog.Description>Description</AlertDialog.Description>
					</AlertDialog.Header>
					<AlertDialog.Footer>
						<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
						<AlertDialog.Action>Action</AlertDialog.Action>
					</AlertDialog.Footer>
				</AlertDialog.Content>
			</AlertDialog.Root>,
		);

		await getByText("Open").click();

		const content = document.body.querySelector(
			'[data-slot="alert-dialog-content"]',
		);
		await expect.element(content as HTMLElement).toBeInTheDocument();

		const title = document.body.querySelector(
			'[data-slot="alert-dialog-title"]',
		);
		await expect.element(title as HTMLElement).toBeInTheDocument();

		const description = document.body.querySelector(
			'[data-slot="alert-dialog-description"]',
		);
		await expect.element(description as HTMLElement).toBeInTheDocument();
	});
});
