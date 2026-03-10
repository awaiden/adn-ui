import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Breadcrumb } from "./index";

describe("Breadcrumb", () => {
	describe("rendering", () => {
		test("renders as a nav element with aria-label", async () => {
			const { container } = await render(
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>,
			);

			const nav = container.querySelector("nav");
			await expect.element(nav as HTMLElement).toBeInTheDocument();
			await expect
				.element(nav as HTMLElement)
				.toHaveAttribute("aria-label", "breadcrumb");
		});

		test("renders list as an ordered list", async () => {
			const { container } = await render(
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>,
			);

			const ol = container.querySelector("ol");
			await expect.element(ol as HTMLElement).toBeInTheDocument();
			await expect.element(ol as HTMLElement).toHaveClass("breadcrumb__list");
		});

		test("renders item as a list item", async () => {
			const { container } = await render(
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>,
			);

			const li = container.querySelector('[data-slot="breadcrumb-item"]');
			await expect.element(li as HTMLElement).toBeInTheDocument();
			await expect.element(li as HTMLElement).toHaveClass("breadcrumb__item");
		});

		test("renders link as an anchor", async () => {
			const { container } = await render(
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>,
			);

			const link = container.querySelector('[data-slot="breadcrumb-link"]');
			await expect.element(link as HTMLElement).toBeInTheDocument();
			await expect.element(link as HTMLElement).toHaveClass("breadcrumb__link");
			await expect.element(link as HTMLElement).toHaveAttribute("href", "/");
		});

		test("renders page with aria-current", async () => {
			const { getByText } = await render(
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Page>Current Page</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>,
			);

			const page = getByText("Current Page");
			await expect.element(page).toHaveClass("breadcrumb__page");
			await expect.element(page).toHaveAttribute("aria-current", "page");
		});

		test("renders separator with aria-hidden", async () => {
			const { container } = await render(
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Page</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>,
			);

			const separator = container.querySelector(
				'[data-slot="breadcrumb-separator"]',
			);
			await expect
				.element(separator as HTMLElement)
				.toHaveAttribute("aria-hidden", "true");
		});

		test("renders ellipsis", async () => {
			const { container } = await render(
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Ellipsis />
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>,
			);

			const ellipsis = container.querySelector(
				'[data-slot="breadcrumb-ellipsis"]',
			);
			await expect
				.element(ellipsis as HTMLElement)
				.toHaveClass("breadcrumb__ellipsis");
		});
	});

	describe("props forwarding", () => {
		test("applies custom className to root", async () => {
			const { container } = await render(
				<Breadcrumb.Root className="custom-nav">
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>,
			);

			const nav = container.querySelector("nav");
			await expect.element(nav as HTMLElement).toHaveClass("breadcrumb");
			await expect.element(nav as HTMLElement).toHaveClass("custom-nav");
		});

		test("applies custom className to link", async () => {
			const { getByText } = await render(
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/" className="custom-link">
								Home
							</Breadcrumb.Link>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>,
			);

			await expect.element(getByText("Home")).toHaveClass("breadcrumb__link");
			await expect.element(getByText("Home")).toHaveClass("custom-link");
		});
	});

	describe("full composition", () => {
		test("renders complete breadcrumb navigation", async () => {
			const { getByText, container } = await render(
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator />
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Components</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>,
			);

			await expect.element(getByText("Home")).toBeInTheDocument();
			await expect.element(getByText("Docs")).toBeInTheDocument();
			await expect.element(getByText("Components")).toBeInTheDocument();

			const separators = container.querySelectorAll(
				'[data-slot="breadcrumb-separator"]',
			);
			expect(separators.length).toBe(2);
		});
	});
});
