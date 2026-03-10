import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Drawer } from "./index";

describe("Drawer", () => {
	test("renders trigger", async () => {
		const { getByText } = await render(
			<Drawer.Root>
				<Drawer.Trigger>Open</Drawer.Trigger>
				<Drawer.Content>
					<Drawer.Title>Title</Drawer.Title>
				</Drawer.Content>
			</Drawer.Root>,
		);

		const trigger = getByText("Open");
		await expect.element(trigger).toBeInTheDocument();
	});

	test("opens drawer on trigger click", async () => {
		const { getByText } = await render(
			<Drawer.Root>
				<Drawer.Trigger>Open</Drawer.Trigger>
				<Drawer.Content>
					<Drawer.Title>Drawer Title</Drawer.Title>
					<Drawer.Description>Drawer Description</Drawer.Description>
				</Drawer.Content>
			</Drawer.Root>,
		);

		await getByText("Open").click();

		await expect.element(getByText("Drawer Title")).toBeInTheDocument();
		await expect.element(getByText("Drawer Description")).toBeInTheDocument();
	});

	test("applies base CSS classes when open", async () => {
		await render(
			<Drawer.Root open>
				<Drawer.Content>
					<Drawer.Header>
						<Drawer.Title>Title</Drawer.Title>
						<Drawer.Description>Description</Drawer.Description>
					</Drawer.Header>
					<Drawer.Footer>Footer</Drawer.Footer>
				</Drawer.Content>
			</Drawer.Root>,
		);

		const content = document.body.querySelector('[data-slot="drawer-content"]');
		await expect.element(content as HTMLElement).toBeInTheDocument();
		await expect.element(content as HTMLElement).toHaveClass("drawer__content");

		const overlay = document.body.querySelector('[data-slot="drawer-overlay"]');
		await expect.element(overlay as HTMLElement).toHaveClass("drawer__overlay");
	});

	test("applies right side variant by default", async () => {
		await render(
			<Drawer.Root open>
				<Drawer.Content>
					<Drawer.Title>Title</Drawer.Title>
					<Drawer.Description>Description</Drawer.Description>
				</Drawer.Content>
			</Drawer.Root>,
		);

		const content = document.body.querySelector('[data-slot="drawer-content"]');
		await expect
			.element(content as HTMLElement)
			.toHaveClass("drawer__content--right");
	});

	test("applies left side variant", async () => {
		await render(
			<Drawer.Root open side="left">
				<Drawer.Content>
					<Drawer.Title>Title</Drawer.Title>
					<Drawer.Description>Description</Drawer.Description>
				</Drawer.Content>
			</Drawer.Root>,
		);

		const content = document.body.querySelector('[data-slot="drawer-content"]');
		await expect
			.element(content as HTMLElement)
			.toHaveClass("drawer__content--left");
	});

	test("applies bottom side variant", async () => {
		await render(
			<Drawer.Root open side="bottom">
				<Drawer.Content>
					<Drawer.Title>Title</Drawer.Title>
					<Drawer.Description>Description</Drawer.Description>
				</Drawer.Content>
			</Drawer.Root>,
		);

		const content = document.body.querySelector('[data-slot="drawer-content"]');
		await expect
			.element(content as HTMLElement)
			.toHaveClass("drawer__content--bottom");
	});

	test("closes drawer when close button is clicked", async () => {
		const { getByText } = await render(
			<Drawer.Root defaultOpen>
				<Drawer.Content>
					<Drawer.Title>Title</Drawer.Title>
					<Drawer.Description>Description</Drawer.Description>
				</Drawer.Content>
			</Drawer.Root>,
		);

		await expect.element(getByText("Title")).toBeInTheDocument();

		const closeButton = document.body.querySelector(
			'[data-slot="drawer-close"]',
		);
		(closeButton as HTMLElement).click();

		await expect.element(getByText("Title")).not.toBeInTheDocument();
	});

	test("renders header and footer", async () => {
		const { getByText } = await render(
			<Drawer.Root open>
				<Drawer.Content>
					<Drawer.Header>
						<Drawer.Title>Header Title</Drawer.Title>
						<Drawer.Description>Header Description</Drawer.Description>
					</Drawer.Header>
					<Drawer.Footer>
						<span>Footer Content</span>
					</Drawer.Footer>
				</Drawer.Content>
			</Drawer.Root>,
		);

		const header = document.body.querySelector('[data-slot="drawer-header"]');
		await expect.element(header as HTMLElement).toHaveClass("drawer__header");

		await expect.element(getByText("Footer Content")).toBeInTheDocument();
		const footer = document.body.querySelector('[data-slot="drawer-footer"]');
		await expect.element(footer as HTMLElement).toHaveClass("drawer__footer");
	});
});
