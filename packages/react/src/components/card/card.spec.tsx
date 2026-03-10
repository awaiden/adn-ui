import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from ".";

describe("Card", () => {
	describe("Card.Root", () => {
		test("renders with base class", async () => {
			const { getByText } = await render(<Card.Root>Card content</Card.Root>);
			const root = getByText("Card content");

			await expect.element(root).toBeInTheDocument();
			await expect.element(root).toHaveClass("card");
			await expect.element(root).toHaveAttribute("data-slot", "card-root");
		});

		test("applies custom className", async () => {
			const { getByText } = await render(
				<Card.Root className="custom-class">Content</Card.Root>,
			);
			const root = getByText("Content");

			await expect.element(root).toHaveClass("card");
			await expect.element(root).toHaveClass("custom-class");
		});

		test("forwards props", async () => {
			const { getByText } = await render(
				<Card.Root data-testid="my-card" id="card-1">
					Content
				</Card.Root>,
			);
			const root = getByText("Content");

			await expect.element(root).toHaveAttribute("data-testid", "my-card");
			await expect.element(root).toHaveAttribute("id", "card-1");
		});
	});

	describe("Card.Header", () => {
		test("renders with correct data-slot and class", async () => {
			const { getByText } = await render(
				<Card.Root>
					<Card.Header>Header</Card.Header>
				</Card.Root>,
			);
			const header = getByText("Header");

			await expect.element(header).toBeInTheDocument();
			await expect.element(header).toHaveClass("card__header");
			await expect.element(header).toHaveAttribute("data-slot", "card-header");
		});

		test("applies custom className", async () => {
			const { getByText } = await render(
				<Card.Root>
					<Card.Header className="extra">Header</Card.Header>
				</Card.Root>,
			);

			await expect.element(getByText("Header")).toHaveClass("extra");
		});
	});

	describe("Card.Title", () => {
		test("renders with correct data-slot and class", async () => {
			const { getByText } = await render(
				<Card.Root>
					<Card.Title>Title</Card.Title>
				</Card.Root>,
			);
			const title = getByText("Title");

			await expect.element(title).toBeInTheDocument();
			await expect.element(title).toHaveClass("card__title");
			await expect.element(title).toHaveAttribute("data-slot", "card-title");
		});

		test("applies custom className", async () => {
			const { getByText } = await render(
				<Card.Root>
					<Card.Title className="bold">Title</Card.Title>
				</Card.Root>,
			);

			await expect.element(getByText("Title")).toHaveClass("bold");
		});
	});

	describe("Card.Description", () => {
		test("renders with correct data-slot and class", async () => {
			const { getByText } = await render(
				<Card.Root>
					<Card.Description>Description text</Card.Description>
				</Card.Root>,
			);
			const desc = getByText("Description text");

			await expect.element(desc).toBeInTheDocument();
			await expect.element(desc).toHaveClass("card__description");
			await expect
				.element(desc)
				.toHaveAttribute("data-slot", "card-description");
		});

		test("applies custom className", async () => {
			const { getByText } = await render(
				<Card.Root>
					<Card.Description className="muted">Desc</Card.Description>
				</Card.Root>,
			);

			await expect.element(getByText("Desc")).toHaveClass("muted");
		});
	});

	describe("Card.Content", () => {
		test("renders with correct data-slot and class", async () => {
			const { getByText } = await render(
				<Card.Root>
					<Card.Content>Body content</Card.Content>
				</Card.Root>,
			);
			const content = getByText("Body content");

			await expect.element(content).toBeInTheDocument();
			await expect.element(content).toHaveClass("card__content");
			await expect
				.element(content)
				.toHaveAttribute("data-slot", "card-content");
		});

		test("applies custom className", async () => {
			const { getByText } = await render(
				<Card.Root>
					<Card.Content className="padded">Body</Card.Content>
				</Card.Root>,
			);

			await expect.element(getByText("Body")).toHaveClass("padded");
		});
	});

	describe("composed card", () => {
		test("renders all subcomponents together", async () => {
			const { getByText } = await render(
				<Card.Root>
					<Card.Header>
						<Card.Title>My Card</Card.Title>
						<Card.Description>A description</Card.Description>
					</Card.Header>
					<Card.Content>Main content here</Card.Content>
				</Card.Root>,
			);

			await expect.element(getByText("My Card")).toBeInTheDocument();
			await expect.element(getByText("A description")).toBeInTheDocument();
			await expect.element(getByText("Main content here")).toBeInTheDocument();
		});

		test("renders children as elements", async () => {
			const { getByText } = await render(
				<Card.Root>
					<Card.Content>
						<span>Nested element</span>
					</Card.Content>
				</Card.Root>,
			);

			await expect.element(getByText("Nested element")).toBeInTheDocument();
		});
	});

	describe("context requirement", () => {
		test("subcomponents throw when used outside Card.Root", async () => {
			const components = [
				{ name: "CardHeader", Component: CardHeader },
				{ name: "CardTitle", Component: CardTitle },
				{ name: "CardDescription", Component: CardDescription },
				{ name: "CardContent", Component: CardContent },
			];

			for (const { Component } of components) {
				let threw = false;
				try {
					await render(<Component>Test</Component>);
				} catch {
					threw = true;
				}
				expect(threw).toBe(true);
			}
		});
	});
});
