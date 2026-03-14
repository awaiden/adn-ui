import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vite-plus/test";

import { Drawer } from "./index";

describe("Drawer", () => {
	test("renders trigger", () => {
		render(
			<Drawer.Root>
				<Drawer.Trigger>Open</Drawer.Trigger>
				<Drawer.Content>
					<Drawer.Title>Title</Drawer.Title>
				</Drawer.Content>
			</Drawer.Root>,
		);

		const trigger = screen.getByText("Open");
		expect(trigger).toBeInTheDocument();
	});

	test("opens drawer on trigger click", async () => {
		render(
			<Drawer.Root>
				<Drawer.Trigger>Open</Drawer.Trigger>
				<Drawer.Content>
					<Drawer.Title>Drawer Title</Drawer.Title>
					<Drawer.Description>Drawer Description</Drawer.Description>
				</Drawer.Content>
			</Drawer.Root>,
		);

		fireEvent.click(screen.getByText("Open"));

		expect(await screen.findByText("Drawer Title")).toBeInTheDocument();
		expect(await screen.findByText("Drawer Description")).toBeInTheDocument();
	});

	test("applies base CSS classes when open", async () => {
		render(
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

		await screen.findByText("Title");
		const content = document.body.querySelector('[data-slot="drawer-content"]');
		expect(content as HTMLElement).toBeInTheDocument();
		expect(content as HTMLElement).toHaveClass("drawer__content");

		const overlay = document.body.querySelector('[data-slot="drawer-overlay"]');
		expect(overlay as HTMLElement).toHaveClass("drawer__overlay");
	});

	test("applies right side variant by default", async () => {
		render(
			<Drawer.Root open>
				<Drawer.Content>
					<Drawer.Title>Title</Drawer.Title>
					<Drawer.Description>Description</Drawer.Description>
				</Drawer.Content>
			</Drawer.Root>,
		);

		await screen.findByText("Title");
		const content = document.body.querySelector('[data-slot="drawer-content"]');
		expect(content as HTMLElement).toHaveClass("drawer__content--right");
	});

	test("applies left side variant", async () => {
		render(
			<Drawer.Root open side="left">
				<Drawer.Content>
					<Drawer.Title>Title</Drawer.Title>
					<Drawer.Description>Description</Drawer.Description>
				</Drawer.Content>
			</Drawer.Root>,
		);

		await screen.findByText("Title");
		const content = document.body.querySelector('[data-slot="drawer-content"]');
		expect(content as HTMLElement).toHaveClass("drawer__content--left");
	});

	test("applies bottom side variant", async () => {
		render(
			<Drawer.Root open side="bottom">
				<Drawer.Content>
					<Drawer.Title>Title</Drawer.Title>
					<Drawer.Description>Description</Drawer.Description>
				</Drawer.Content>
			</Drawer.Root>,
		);

		await screen.findByText("Title");
		const content = document.body.querySelector('[data-slot="drawer-content"]');
		expect(content as HTMLElement).toHaveClass("drawer__content--bottom");
	});

	test("closes drawer when close button is clicked", async () => {
		render(
			<Drawer.Root defaultOpen>
				<Drawer.Content>
					<Drawer.Title>Title</Drawer.Title>
					<Drawer.Description>Description</Drawer.Description>
				</Drawer.Content>
			</Drawer.Root>,
		);

		expect(await screen.findByText("Title")).toBeInTheDocument();

		const closeButton = document.body.querySelector(
			'[data-slot="drawer-close"]',
		);
		fireEvent.click(closeButton as HTMLElement);

		await waitFor(() => {
			expect(screen.queryByText("Title")).not.toBeInTheDocument();
		});
	});

	test("renders header and footer", async () => {
		render(
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

		await screen.findByText("Header Title");
		const header = document.body.querySelector('[data-slot="drawer-header"]');
		expect(header as HTMLElement).toHaveClass("drawer__header");

		expect(screen.getByText("Footer Content")).toBeInTheDocument();
		const footer = document.body.querySelector('[data-slot="drawer-footer"]');
		expect(footer as HTMLElement).toHaveClass("drawer__footer");
	});
});
