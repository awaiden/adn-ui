import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Alert } from "./index";

describe("Alert", () => {
	describe("rendering", () => {
		test("renders with role alert", async () => {
			const { getByRole } = await render(
				<Alert.Root>
					<Alert.Title>Alert</Alert.Title>
				</Alert.Root>,
			);

			const alert = getByRole("alert");
			await expect.element(alert).toBeInTheDocument();
		});

		test("renders with base class", async () => {
			const { container } = await render(
				<Alert.Root>
					<Alert.Title>Title</Alert.Title>
				</Alert.Root>,
			);

			const alert = container.querySelector('[data-slot="alert"]');
			await expect.element(alert as HTMLElement).toHaveClass("alert");
		});

		test("renders title with base class", async () => {
			const { getByText } = await render(
				<Alert.Root>
					<Alert.Title>My Title</Alert.Title>
				</Alert.Root>,
			);

			await expect.element(getByText("My Title")).toHaveClass("alert__title");
		});

		test("renders description with base class", async () => {
			const { getByText } = await render(
				<Alert.Root>
					<Alert.Title>Title</Alert.Title>
					<Alert.Description>My description</Alert.Description>
				</Alert.Root>,
			);

			await expect
				.element(getByText("My description"))
				.toHaveClass("alert__description");
		});

		test("renders title as h5 element", async () => {
			const { container } = await render(
				<Alert.Root>
					<Alert.Title>Heading</Alert.Title>
				</Alert.Root>,
			);

			const h5 = container.querySelector("h5");
			await expect.element(h5 as HTMLElement).toBeInTheDocument();
		});
	});

	describe("variants", () => {
		test("applies default variant", async () => {
			const { container } = await render(
				<Alert.Root variant="default">
					<Alert.Title>Default</Alert.Title>
				</Alert.Root>,
			);

			const alert = container.querySelector('[data-slot="alert"]');
			await expect.element(alert as HTMLElement).toHaveClass("alert--default");
		});

		test("applies destructive variant", async () => {
			const { container } = await render(
				<Alert.Root variant="destructive">
					<Alert.Title>Error</Alert.Title>
				</Alert.Root>,
			);

			const alert = container.querySelector('[data-slot="alert"]');
			await expect
				.element(alert as HTMLElement)
				.toHaveClass("alert--destructive");
		});

		test("defaults to default variant", async () => {
			const { container } = await render(
				<Alert.Root>
					<Alert.Title>Info</Alert.Title>
				</Alert.Root>,
			);

			const alert = container.querySelector('[data-slot="alert"]');
			await expect.element(alert as HTMLElement).toHaveClass("alert--default");
		});
	});

	describe("props forwarding", () => {
		test("applies custom className to root", async () => {
			const { container } = await render(
				<Alert.Root className="custom-alert">
					<Alert.Title>Title</Alert.Title>
				</Alert.Root>,
			);

			const alert = container.querySelector('[data-slot="alert"]');
			await expect.element(alert as HTMLElement).toHaveClass("alert");
			await expect.element(alert as HTMLElement).toHaveClass("custom-alert");
		});

		test("applies custom className to title", async () => {
			const { getByText } = await render(
				<Alert.Root>
					<Alert.Title className="custom-title">Title</Alert.Title>
				</Alert.Root>,
			);

			await expect.element(getByText("Title")).toHaveClass("alert__title");
			await expect.element(getByText("Title")).toHaveClass("custom-title");
		});

		test("applies custom className to description", async () => {
			const { getByText } = await render(
				<Alert.Root>
					<Alert.Title>Title</Alert.Title>
					<Alert.Description className="custom-desc">
						Description
					</Alert.Description>
				</Alert.Root>,
			);

			await expect
				.element(getByText("Description"))
				.toHaveClass("alert__description");
			await expect.element(getByText("Description")).toHaveClass("custom-desc");
		});

		test("forwards data attributes to root", async () => {
			const { container } = await render(
				<Alert.Root data-testid="my-alert">
					<Alert.Title>Title</Alert.Title>
				</Alert.Root>,
			);

			const alert = container.querySelector('[data-slot="alert"]');
			await expect
				.element(alert as HTMLElement)
				.toHaveAttribute("data-testid", "my-alert");
		});
	});

	describe("full composition", () => {
		test("renders complete alert with title and description", async () => {
			const { getByText, getByRole } = await render(
				<Alert.Root>
					<Alert.Title>Heads up!</Alert.Title>
					<Alert.Description>
						You can add components to your app using the CLI.
					</Alert.Description>
				</Alert.Root>,
			);

			await expect.element(getByRole("alert")).toBeInTheDocument();
			await expect.element(getByText("Heads up!")).toBeInTheDocument();
			await expect
				.element(getByText("You can add components to your app using the CLI."))
				.toBeInTheDocument();
		});
	});
});
